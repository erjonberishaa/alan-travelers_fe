import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTicketsContent = createAsyncThunk(
    '/tickets/content',
    async () => {
        const response = await axios.get('http://localhost:8080/tickets', {})
        console.log(response.data)
        return response
    }
)

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        isLoading: false,
        tickets: [],
    },
    reducers: {
        addNewTicket: (state, action) => {
            let { newTicketObj } = action.payload
            state.tickets = [...state.tickets, newTicketObj]
        },

        deleteTicket: (state, action) => {
            let { index } = action.payload
            state.tickets.splice(index, 1)
        },
    },

    extraReducers: {
        [getTicketsContent.pending]: (state) => {
            state.isLoading = true
        },
        [getTicketsContent.fulfilled]: (state, action) => {
            state.tickets = action.payload.data
            state.isLoading = false
        },
        [getTicketsContent.rejected]: (state) => {
            state.isLoading = false
        },
    },
})

export const { addNewTicket, deleteTicket } = ticketsSlice.actions

export default ticketsSlice.reducer

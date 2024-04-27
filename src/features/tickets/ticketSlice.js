import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, del } from '../../api/api'

export const getTicketsContent = createAsyncThunk(
    '/tickets/content',
    async () => {
        const response = await get('tickets')
        return { data: response.data }
    }
)
export const deleteTicket = createAsyncThunk(
    '/tickets/delete',
    async (ticketId) => {
        await del(`tickets/${ticketId}`)
        return ticketId
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
            const ticketIdToDelete = action.payload
            state.tickets = state.tickets.filter(
                (ticket) => ticket.id !== ticketIdToDelete
            )
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

export const { addNewTicket } = ticketsSlice.actions

export default ticketsSlice.reducer

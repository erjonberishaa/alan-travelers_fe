import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTaxisContent = createAsyncThunk(
    '/taxis/content',
    async () => {
        const response = await axios.get('http://localhost:8080/taxis', {})
        console.log(response.data)
        return response
    }
)

export const taxiSlice = createSlice({
    name: 'taxi',
    initialState: {
        isLoading: false,
        tickets: [],
    },
    reducers: {
        addNewTaxi: (state, action) => {
            let { newTaxiObj } = action.payload
            state.taxi = [...state.taxi, newTaxiObj]
        },

        deleteTicket: (state, action) => {
            let { index } = action.payload
            state.taxi.splice(index, 1)
        },
    },

    extraReducers: {
        [getTaxisContent.pending]: (state) => {
            state.isLoading = true
        },
        [getTaxisContent.fulfilled]: (state, action) => {
            state.taxis = action.payload.data
            state.isLoading = false
        },
        [getTaxisContent.rejected]: (state) => {
            state.isLoading = false
        },
    },
})

export const { addNewTaxi, deleteTaxi } = taxiSlice.actions

export default taxiSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, del } from '../../api/api'

export const getHotelsContent = createAsyncThunk(
    '/hotels/content',
    async () => {
        const response = await get('hotels')
        return { data: response.data }
    }
)
export const deleteHotel = createAsyncThunk(
    '/hotels/delete',
    async (ticketId) => {
        await del(`hotels/${ticketId}`)
        return ticketId
    }
)
export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: {
        isLoading: false,
        hotels: [],
    },
    reducers: {
        addNewHotel: (state, action) => {
            let { newHotelObj } = action.payload
            state.hotels = [...state.hotels, newHotelObj]
        },
        deleteHotel: (state, action) => {
            const ticketIdToDelete = action.payload
            state.hotels = state.hotels.filter(
                (ticket) => ticket.id !== ticketIdToDelete
            )
        },
    },

    extraReducers: {
        [getHotelsContent.pending]: (state) => {
            state.isLoading = true
        },
        [getHotelsContent.fulfilled]: (state, action) => {
            state.hotels = action.payload.data
            state.isLoading = false
        },
        [getHotelsContent.rejected]: (state) => {
            state.isLoading = false
        },
    },
})

export const { addNewHotel } = hotelsSlice.actions

export default hotelsSlice.reducer

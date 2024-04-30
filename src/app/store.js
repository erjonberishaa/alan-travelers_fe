import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import leadsSlice from '../features/leads/leadSlice'
import ticketSlice from '../features/tickets/ticketSlice'
import hotelSlice from '../features/hotels/hotelSlice'

const combinedReducer = {
    header: headerSlice,
    rightDrawer: rightDrawerSlice,
    modal: modalSlice,
    lead: leadsSlice,
    hotel: hotelSlice,
    ticket: ticketSlice,
}

export default configureStore({
    reducer: combinedReducer,
})

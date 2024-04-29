import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import leadsSlice from '../features/leads/leadSlice'
import ticketSlice from '../features/tickets/ticketSlice'
import taxiSlice from '../fetaures/taxis/taxiSlice'

const combinedReducer = {
    header: headerSlice,
    rightDrawer: rightDrawerSlice,
    modal: modalSlice,
    lead: leadsSlice,
    ticket: ticketSlice,
    taxi: taxiSlice,
}

export default configureStore({
    reducer: combinedReducer,
})

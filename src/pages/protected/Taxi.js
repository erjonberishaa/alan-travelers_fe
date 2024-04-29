import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Tickets from '../../features/tickets/ticket-list'
import { setPageTitle } from '../../features/common/headerSlice'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Taxi' }))
    }, [])

    return <Taxi />
}

export default InternalPage
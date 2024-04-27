import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitleCard from '../../components/Cards/TitleCard'
import { openModal } from '../common/modalSlice'
import { deleteTicket, getTicketsContent, addNewTicket } from './ticketSlice'
import {
    CONFIRMATION_MODAL_CLOSE_TYPES,
    MODAL_BODY_TYPES,
} from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'

const TopSideButtons = () => {
    const dispatch = useDispatch()

    const openAddNewTicketModal = () => {
        dispatch(
            openModal({
                title: 'Add New Ticket',
                bodyType: MODAL_BODY_TYPES.TICKET_ADD_NEW,
            })
        )
    }

    return (
        <div className="inline-block float-right">
            <button
                className="btn px-6 btn-sm normal-case btn-primary"
                onClick={() => openAddNewTicketModal()}
            >
                Add New
            </button>
        </div>
    )
}

const Tickets = () => {
    const { tickets } = useSelector((state) => state.ticket)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTicketsContent())
    }, [dispatch])

    const deleteCurrentTicket = async (id) => {
        try {
            await dispatch(deleteTicket(id))

            dispatch(getTicketsContent())

            dispatch(
                showNotification({
                    message: 'Ticket deleted successfully!',
                    status: 1,
                })
            )
        } catch (error) {
            console.error('Error deleting ticket:', error)
        }
    }

    return (
        <>
            <TitleCard
                title="Current Tickets"
                topMargin="mt-2"
                TopSideButtons={<TopSideButtons />}
            >
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Booking Date</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((ticket) => (
                                <tr key={ticket.id}>
                                    <td>{ticket.passengerName}</td>
                                    <td>{ticket.passengerEmail}</td>
                                    <td>
                                        {moment(ticket.bookingDate).format(
                                            'DD MMM YY'
                                        )}
                                    </td>
                                    <td>{ticket.ticketStatus}</td>
                                    <td>{ticket.passengerPhoneNumber}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                deleteCurrentTicket(ticket.id)
                                            }
                                        >
                                            <TrashIcon className="w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}

export default Tickets

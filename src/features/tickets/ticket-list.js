import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitleCard from '../../components/Cards/TitleCard'
import { openModal } from '../common/modalSlice'
import { deleteTicket, getTicketsContent } from './ticketSlice'
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

    const deleteCurrentTicket = (index) => {
        dispatch(
            openModal({
                title: 'Confirmation',
                bodyType: MODAL_BODY_TYPES.CONFIRMATION,
                extraObject: {
                    message: `Are you sure you want to delete this ticket?`,
                    type: CONFIRMATION_MODAL_CLOSE_TYPES.TICKET_DELETE,
                    index,
                },
            })
        )
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
                            {tickets.map((ticket, index) => (
                                <tr key={index}>
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
                                            className="btn btn-square btn-ghost"
                                            onClick={() =>
                                                deleteCurrentTicket(index)
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

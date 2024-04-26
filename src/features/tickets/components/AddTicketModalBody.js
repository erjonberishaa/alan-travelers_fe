import { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from '../../common/headerSlice'
import { addNewTicket } from '../ticketSlice'

const INITIAL_TICKET_OBJ = {
    passengerName: '',
    seatNumber: '',
    ticketClass: '',
    ticketPrice: '',
    ticketStatus: '',
    bookingDate: '',
    passengerEmail: '',
    passengerPhoneNumber: '',
    paymentStatus: '',
}

function AddTicketModalBody({ closeModal }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [ticketObj, setTicketObj] = useState(INITIAL_TICKET_OBJ)

    const saveNewTicket = async () => {
        try {
            setLoading(true)
            // Validate ticket data
            if (!isValidTicket()) {
                setErrorMessage('Please fill out all required fields.')
                return
            }
            const response = await fetch(`http://localhost:8080/tickets/1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketObj),
            })
            const data = await response.json()
            // Handle success response
            dispatch(addNewTicket({ newTicketObj: data }))
            dispatch(
                showNotification({ message: 'New Ticket Added!', status: 1 })
            )
            closeModal()
        } catch (error) {
            // Handle error
            console.error('Error adding new ticket:', error)
            setErrorMessage('Error adding new ticket. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage('')
        setTicketObj({ ...ticketObj, [updateType]: value })
    }

    const isValidTicket = () => {
        // Check if all required fields are filled out
        for (const key in ticketObj) {
            if (ticketObj[key] === '') {
                return false
            }
        }
        return true
    }

    return (
        <>
            <InputText
                type="text"
                defaultValue={ticketObj.passengerName}
                updateType="passengerName"
                containerStyle="mt-4"
                labelTitle="Passenger Name"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={ticketObj.seatNumber}
                updateType="seatNumber"
                containerStyle="mt-4"
                labelTitle="Seat Number"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={ticketObj.ticketClass}
                updateType="ticketClass"
                containerStyle="mt-4"
                labelTitle="Ticket Class"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={ticketObj.ticketPrice}
                updateType="ticketPrice"
                containerStyle="mt-4"
                labelTitle="Ticket Price"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={ticketObj.ticketStatus}
                updateType="ticketStatus"
                containerStyle="mt-4"
                labelTitle="Ticket Status"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={ticketObj.bookingDate}
                updateType="bookingDate"
                containerStyle="mt-4"
                labelTitle="Booking Date"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="email"
                defaultValue={ticketObj.passengerEmail}
                updateType="passengerEmail"
                containerStyle="mt-4"
                labelTitle="Passenger Email"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={ticketObj.passengerPhoneNumber}
                updateType="passengerPhoneNumber"
                containerStyle="mt-4"
                labelTitle="Passenger Phone Number"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={ticketObj.paymentStatus}
                updateType="paymentStatus"
                containerStyle="mt-4"
                labelTitle="Payment Status"
                updateFormValue={updateFormValue}
            />

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>
                    Cancel
                </button>
                <button
                    className="btn btn-primary px-6"
                    onClick={() => saveNewTicket()}
                >
                    Save
                </button>
            </div>
        </>
    )
}

export default AddTicketModalBody

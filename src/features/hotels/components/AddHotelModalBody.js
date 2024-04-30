import { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from '../../common/headerSlice'
import { addNewHotel } from '../hotelSlice'
import { post } from '../../../api/api'

const INITIAL_HOTEL_OBJ = {
    fullName: '',
    numerOfAdults: 1,
    numerOfChildren: 0,
    roomType: '',
    checkInDate: new Date(),
    checkOutDate: new Date(),
    emailAddress: '',
    phoneNumber: '',
}

function AddHotelModalBody({ closeModal }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [hotelObj, setHotelObj] = useState(INITIAL_HOTEL_OBJ)

    const saveNewHotel = async () => {
        try {
            setLoading(true)
            // Validate hotel data
            if (!isValidHotel()) {
                setErrorMessage('Please fill out all required fields.')
                return
            }
            const response = await post('hotels/1', hotelObj)
            // Handle success response
            dispatch(addNewHotel({ newHotelObj: response.data }))
            dispatch(
                showNotification({ message: 'New Hotel Added!', status: 1 })
            )
            closeModal()
        } catch (error) {
            // Handle error
            console.error('Error adding new hotel:', error)
            setErrorMessage('Error adding new hotel. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage('')
        setHotelObj({ ...hotelObj, [updateType]: value })
    }

    const isValidHotel = () => {
        // Check if all required fields are filled out
        for (const key in hotelObj) {
            if (hotelObj[key] === '') {
                return false
            }
        }
        return true
    }

    return (
        <>
            <InputText
                type="text"
                defaultValue={hotelObj.fullName}
                updateType="fullName"
                containerStyle="mt-4"
                labelTitle="Full Name"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="numberOfAdults"
                defaultValue={hotelObj.numerOfAdults}
                updateType="numerOfAdults"
                containerStyle="mt-4"
                labelTitle="Number of Adults"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="numberOfChildren"
                defaultValue={hotelObj.numerOfChildren}
                updateType="numerOfChildren"
                containerStyle="mt-4"
                labelTitle="Number of Children"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={hotelObj.roomType}
                updateType="roomType"
                containerStyle="mt-4"
                labelTitle="Room Type"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="date"
                defaultValue={hotelObj.checkInDate}
                updateType="checkInDate"
                containerStyle="mt-4"
                labelTitle="Check In Date"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="date"
                defaultValue={hotelObj.checkOutDate}
                updateType="checkOutDate"
                containerStyle="mt-4"
                labelTitle="Check Out Date"
                updateFormValue={updateFormValue}
            />


            <InputText
                type="email"
                defaultValue={hotelObj.emailAddress}
                updateType="emailAddress"
                containerStyle="mt-4"
                labelTitle="Email Address"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="tel"
                defaultValue={hotelObj.phoneNumber}
                updateType="phoneNumber"
                containerStyle="mt-4"
                labelTitle="Phone Number"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={hotelObj.paymentStatus}
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
                    onClick={() => saveNewHotel()}
                >
                    Save
                </button>
            </div>
        </>
    )
}

export default AddHotelModalBody

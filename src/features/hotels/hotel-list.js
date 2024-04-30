import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitleCard from '../../components/Cards/TitleCard'
import { openModal } from '../common/modalSlice'
import { deleteHotel, getHotelsContent, addNewHotel } from './hotelSlice'
import {
    CONFIRMATION_MODAL_CLOSE_TYPES,
    MODAL_BODY_TYPES,
} from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'

const TopSideButtons = () => {
    const dispatch = useDispatch()

    const openAddNewHotelModal = () => {
        dispatch(
            openModal({
                title: 'Add New Hotel',
                bodyType: MODAL_BODY_TYPES.HOTEL_ADD_NEW,
            })
        )
    }

    return (
        <div className="inline-block float-right">
            <button
                className="btn px-6 btn-sm normal-case btn-primary"
                onClick={() => openAddNewHotelModal()}
            >
                Add New
            </button>
        </div>
    )
}

const Hotels = () => {
    const { hotels } = useSelector((state) => state.hotel)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotelsContent())
    }, [dispatch])

    const deleteCurrentHotel = async (id) => {
        try {
            await dispatch(deleteHotel(id))

            dispatch(getHotelsContent())

            dispatch(
                showNotification({
                    message: 'Hotel deleted successfully!',
                    status: 1,
                })
            )
        } catch (error) {
            console.error('Error deleting hotel:', error)
        }
    }

    return (
        <>
            <TitleCard
                title="Current Hotels"
                topMargin="mt-2"
                TopSideButtons={<TopSideButtons />}
            >
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {hotels.map((hotel) => (
                                <tr key={hotel.id}>
                                    <td>{hotel.passengerName}</td>
                                    <td>{hotel.passengerEmail}</td>
                                    <td>
                                        {moment(hotel.bookingDate).format(
                                            'DD MMM YY'
                                        )}
                                    </td>
                                    <td>{hotel.hotelStatus}</td>
                                    <td>{hotel.passengerPhoneNumber}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                deleteCurrentHotel(hotel.id)
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

export default Hotels

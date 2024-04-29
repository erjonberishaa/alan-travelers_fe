import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitleCard from '../../components/Cards/TitleCard'
import { openModal } from '../common/modalSlice'
import { deleteTaxi, getTaxiContent } from './taxiSlice'
import {
    CONFIRMATION_MODAL_CLOSE_TYPES,
    MODAL_BODY_TYPES,
} from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'

const TopSideButtons = () => {
    const dispatch = useDispatch()

    const openAddNewTaxiModal = () => {
        dispatch(
            openModal({
                title: 'Add New Taxi',
                bodyType: MODAL_BODY_TYPES.TAXI_ADD_NEW,
            })
        )
    }

    return (
        <div className="inline-block float-right">
            <button
                className="btn px-6 btn-sm normal-case btn-primary"
                onClick={() => openAddNewTaxiModal()}
            >
                Add New
            </button>
        </div>
    )
}

const Taxi = () => {
    const { taxis } = useSelector((state) => state.taxi)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTaxiContent())
    }, [dispatch])

    const deleteCurrentTaxi = (index) => {
        dispatch(
            openModal({
                title: 'Confirmation',
                bodyType: MODAL_BODY_TYPES.CONFIRMATION,
                extraObject: {
                    message: `Are you sure you want to delete this taxi?`,
                    type: CONFIRMATION_MODAL_CLOSE_TYPES.TAXI_DELETE,
                    index,
                },
            })
        )
    }

    return (
        <>
            <TaxiCard
                title="Current Taxis"
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
                            {taxis.map((taxi, index) => (
                                <tr key={index}>
                                    <td>{taxi.passengerName}</td>
                                    <td>{taxi.passengerEmail}</td>
                                    <td>
                                        {moment(taxi.bookingDate).format(
                                            'DD MMM YY'
                                        )}
                                    </td>
                                    <td>{taxi.taxiStatus}</td>
                                    <td>{taxi.passengerPhoneNumber}</td>
                                    <td>
                                        <button
                                            className="btn btn-square btn-ghost"
                                            onClick={() =>
                                                deleteCurrentTaxi(index)
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
            </TaxiCard>
        </>
    )
}

export default Taxi
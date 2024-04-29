import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Taxi from '../../features/taxis/taxi-list'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Taxi' }))
    }, [])

    return <Taxi />
}

export default InternalPage
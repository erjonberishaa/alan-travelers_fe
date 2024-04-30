import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Hotels from '../../features/hotels/hotel-list'
import { setPageTitle } from '../../features/common/headerSlice'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Hotels' }))
    }, [])

    return <Hotels/>
}

export default InternalPage

import React from 'react'

const TaxiTab = () => {
    const [pickupLocation, setPickupLocation] = React.useState('')
    const [dropoffLocation, setDropoffLocation] = React.useState('')
    const [time, setTime] = React.useState('')
    const [date, setDate] = React.useState('')
    const [passangers, setPassangers] = React.useState('')

    return (
        <form className="rounded-md self-center p-4 max-w-6xl flex justify-between items-center">
            <input
                type="text"
                placeholder="Dropoff Location"
                className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Pickup Location"
                className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
            />
            <input
                type="time"
                className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Enter passanger count"
                className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                value={passangers}
                onChange={(e) => setPassangers(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Date"
                className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button className="btn btn-primary flex-shrink-0">Taxi</button>
        </form>
    )
}

export default TaxiTab

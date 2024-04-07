import React from 'react'

const FlightsTab = () => {
    const [startDate, setStartDate] = React.useState(new Date())
    const [origin, setOrigin] = React.useState('')
    const [passangers, setPassangers] = React.useState('')
    const [destination, setDestination] = React.useState('')

    return (
        <form className="rounded-md self-center p-4 max-w-6xl flex justify-between items-center">
            <input
                type="list"
                placeholder="Enter origin"
                className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Enter destination"
                className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
            />
            <input
                type="date"
                className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
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
            <button className="btn btn-primary flex-shrink-0">Search</button>
        </form>
    )
}

export default FlightsTab

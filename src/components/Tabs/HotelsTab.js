import React from "react";

const HotelsTab = () => {
    const [checkIn, setCheckIn] = React.useState(new Date())
    const [checkOut, setCheckOut] = React.useState(new Date())
    const [destination, setDestination] = React.useState('')

    return (
        <form className="rounded-md self-center p-4 max-w-6xl flex justify-between items-center">
            <input
            type="list"
            placeholder="Where are you going?"
            className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            >
            </input>

            <div>
                <div>
                    <label htmlFor="checkIn" className="block text-white-700 text-sm font-bold mb-2">Check In</label>
                </div>
                <input
                    type="date"
                    id="checkIn"
                    className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="checkOut" className="block text-white-700 text-sm font-bold mb-2">Check Out</label>
                <input
                    type="date"
                    id="checkOut"
                    className="input input-bordered flex-grow mr-2 mb-2 md:mb-0"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                />
            </div>
            <button className="btn btn-primary flex-shrink-0">Search</button>
        </form>
    )
}

export default HotelsTab
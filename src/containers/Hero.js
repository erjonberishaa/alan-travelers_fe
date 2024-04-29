import React from 'react'
import { Tabs } from 'flowbite-react'
import { PiAirplaneInFlightFill } from 'react-icons/pi'
import { MdLocalHotel } from 'react-icons/md'
import { IoCarSportSharp } from 'react-icons/io5'
import FlightsTab from '../components/Tabs/FlightsTab'
import TaxiTab from '../components/Tabs/TaxiTab'
const Hero = () => {
    return (
        <div className="p-8 min-h-screen">
            <div className="">
                <div className="">
                    <h1 className="text-5xl font-bold text-center lg:text-left block">
                        Book your flight now!
                    </h1>
                    <p className="py-6 text-center lg:text-left block">
                        Find the best deals on flights, hotels and cars with
                        ALAN TRAVELERS today!
                    </p>
                </div>
            </div>
            <div className=" radius-lg shadow-2xl ">
                <Tabs aria-label="Default tabs" style="default">
                    <Tabs.Item
                        active
                        title="Flight"
                        icon={PiAirplaneInFlightFill}
                    >
                        <FlightsTab />
                    </Tabs.Item>
                    <Tabs.Item title="Hotel" icon={MdLocalHotel}>
                        This is{' '}
                        <span className="font-medium text-gray-800 dark:text-white">
                            Dashboard tab's associated content
                        </span>
                        . Clicking another tab will toggle the visibility of
                        this one for the next. The tab JavaScript swaps classes
                        to control the content visibility and styling.
                    </Tabs.Item>
                    <Tabs.Item title="Cars" icon={IoCarSportSharp}>
                        This is{' '}
                        <span className="font-medium text-gray-800 dark:text-white">
                            Dashboard tab's associated content
                        </span>
                        . Clicking another tab will toggle the visibility of
                        this one for the next. The tab JavaScript swaps classes
                        to control the content visibility and styling.
                    </Tabs.Item>
                    <Tabs.Item
                        active
                        title="Taxi"
                        icon={IoCarSportSharp}
                    >
                        <TaxiTab />
                    </Tabs.Item>
                    
                </Tabs>
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import Header from '../../../components/events/Header'
import Register from '../../../components/events/Register'
import Eligibility from '../../../components/events/Eligibility'
import Overview from '../../../components/events/Overview'
import Details from '../../../components/events/Details'
import Mentors from '../../../components/events/Mentors'
import { RiGalleryFill } from 'react-icons/ri'
import { CgYoutube } from 'react-icons/cg'
import events from '../../../data/event'

const page = ({ params }) => {
    const id  = params.id
    const event = events.find(singleEvent => singleEvent.id === parseInt(id))
    console.log(event)
    return (
        <div key={event.id} className='bg-gray-100 pb-12'>
            <Header header={event.headerImage} />
            <Details logo={event.logo} name={event.name} chapter={event.chapter} venue={event.venue} />
            <Register date={event.date} venue={event.venue} />
            <div className='w-10/12 my-6  mx-auto flex flex-row-reverse flex-wrap'>
                <div className='w-full lg:w-1/3 '>

                    <Eligibility eventType={event.photogallery} />
                </div>
                <div className='w-full lg:w-2/3 pr-0 lg:pr-6'>
                    <Overview overview={event.overview} name={event.name} />

                </div>
            </div>
            <div className="w-10/12 mx-auto">
                <Mentors speakers={event.speakers} type={event.guest_type} />
                {/* <Partners partners={event.partners} /> */}
            </div>
        </div>
    )
}

export default page
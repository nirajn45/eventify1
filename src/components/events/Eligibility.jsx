import React from 'react'
import { RiGalleryFill } from 'react-icons/ri'
import Link from 'next/link'

const Eligibility = ({ eventType }) => {
  return (
    <div className=' text-white bg-[#00112d] rounded-md mx-auto p-6 my-6 lg:my-0'>
      <Link href={eventType}>
        <p className="text-lg font-bold mb-3">
          View gallery
        </p>
        <div className="flex flex-wrap gap-3">
          <RiGalleryFill className='h-10 w-10' />
        </div></Link>
    </div>
  )
}

export default Eligibility
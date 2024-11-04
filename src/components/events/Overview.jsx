import React from 'react'

const Overview = ({ overview, name }) => {
  return (
    <div className='bg-white mx-auto p-6 rounded-md shadow-md'>
      <p className='font-semibold text-lg  md:text-xl mb-3 pb-3'>
        {name}
      </p>
      <p className='text-justify text-sm md:text-md'>
        {overview}
      </p>
    </div>
  )
}

export default Overview
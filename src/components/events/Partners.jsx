import React from 'react'

const Partners = ({partners }) => {
    const spon = "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg"

    

    return (
        <div>
            <p className="text-xl lg:text-3xl font-semibold py-12">
                Partners
            </p>
           <div className="grid grid-cols-2 md:flex flex-wrap gap-3">
            {partners.map((partner, index)=>(
                 <img src={partner} key={index} className='w-full h-[75px] md:w-[200px]  object-contain p-2 rounded-md bg-white flex items-center justify-center' />
            ))}
           </div>

        </div>
    )
}

export default Partners
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUsers, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



const Details = ({ name, chapter, venue, logo }) => {
    return (
        <div className='mt-[-50px] z-100 my-6 py-6 w-10/12 mx-auto bg-white rounded-md shadow-md p-4 flex gap-8'>
            <img src={logo} className='h-20 w-20 object-contain p-1 rounded-md' />
            <div className="flex flex-col justify-center">
                <p className="text-lg lg:text-2xl font-bold flex items-center gap-3">
                    <FontAwesomeIcon icon={faTrophy} width={16} height={16} /> {name}
                </p>
                <p className='text-md font-semibold flex items-center gap-3'>
                    <FontAwesomeIcon icon={faUsers} width={16} height={16} /> {chapter}
                </p>
                <p className='text-sm lg:text-md font-semibold flex items-center gap-3'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} width={16} height={16} /> {venue}
                </p>
            </div>
        </div>
    );
}

export default Details;

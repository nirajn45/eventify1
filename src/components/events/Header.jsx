import React from 'react'

const Header = ({header}) => {
  return (
    <div className='w-full h-[60vh]' style={{backgroundImage:`url(${header})`, backgroundSize:"cover", backgroundPosition:"center center"}}>
        {/* <Image src={header} className='h-full object-cover object-center w-full'/> */}
    </div>
  )
}

export default Header
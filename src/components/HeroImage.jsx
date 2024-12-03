import React from 'react'
import myImage from '../assets/mybnwpic.png'

const HeroImage = () => {
  return (
    <div className='w-full absolute top-0 h-full'>
        <img className='opacity-50 absolute bottom-0 h-[70vh] right-0 z-[-2]' src={myImage} alt="UserImage" />
    </div>
  )
}

export default HeroImage
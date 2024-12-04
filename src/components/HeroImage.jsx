import React, { useRef } from 'react'
import myImage from '../assets/mybnwpic.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroImage = () => {
  const heroImageRef = useRef();

  useGSAP(() => {
    gsap.to(heroImageRef.current, {
      opacity:0.7, duration: 2, ease: "elastic.out(1,0.6)", delay: 4.2,
    })
})


  return (
    <div className='w-full absolute top-0 h-full'>
        <img ref={heroImageRef} className='opacity-100 absolute bottom-0 h-[70vh] right-0 z-[-2]' src={myImage} alt="UserImage" />
    </div>
  )
}

export default HeroImage
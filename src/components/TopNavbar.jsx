import React, { useEffect, useRef } from 'react'
import gsap from "gsap";

const TopNavbar = () => {

    const divRef = useRef(null);

    useEffect(() => {
        const el = divRef.current;

        const onHover = () => gsap.to(el, { width: "10vh", duration: 0.5, ease: "elastic.out(1,0.3)", });
        const onLeave = () => gsap.to(el, { width: "5vh", duration: 0.5, ease: "elastic.out(1,0.3)", });

        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", onLeave);

        return () => {
            el.removeEventListener("mouseenter", onHover);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <div className='absolute top-[2vh] right-[5vw] z-[100]'>
            <ul className='text-black flex gap-5'>
                <li  className='cursor-pointer relative'>about<div ref={divRef} className='absolute bg-sky-500 w-10 aspect-square rounded-tl-xl rounded-br-xl rotate-45'></div></li>
                <li className='cursor-pointer'>projects</li>
                <li className='cursor-pointer'>skills</li>
                <li className='cursor-pointer'>experience</li>
                <li className='cursor-pointer'>achievements</li>
                <li className='cursor-pointer'>contact</li>
            </ul>
        </div>
    )
}

export default TopNavbar
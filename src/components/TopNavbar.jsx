import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";

const TopNavbar = () => {

    const navBgRef = useRef();
    const navListRef = useRef();

    const handleHoverOnNav = (e) => {

        gsap.to(navBgRef.current, {
            right: "-35vw", duration: 1, ease: "elastic.out(1,0.6)",
        }),

        gsap.to(navListRef.current, {
            color: "rgb(234, 232, 227)", duration: 0.3, ease: "power4.out",
        })
    }

    const handleMouseLeavefromNav = (e) => {

        const rect = navListRef.current.getBoundingClientRect(); // Get the bounding rectangle

        // Check if mouse is within the bounds of the NavList div
        const isMouseOverNavList = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

        if (!isMouseOverNavList) {
            gsap.to(e.target, {
                right: "-90vw", duration: 1, ease: "elastic.out(1,0.6)",
            });

            gsap.to(navListRef.current, {
                color: "black", duration: 0.3, ease: "power4.out",
            })
        }

    }

    return (
        <div className='absolute top-[2vh] right-[5vw] z-[100]'>
            <div ref={navBgRef} onMouseLeave={handleMouseLeavefromNav} className='bg-black absolute rotate-45 w-[80vw] h-[120vh] -top-[25vh] -right-[90vw] z-[0]'>
                <div className='text-sky-500 text-5xl uppercase absolute top-0 z-[105] -rotate-45'>experiencefkldsnflkjasdklfnklsadfnlasdnfklsadnflknfkl</div>
            </div>

            <ul ref={navListRef} onMouseEnter={handleHoverOnNav} className='text-black flex gap-5 z-[104] absolute right-0 p-2'>
                <li className='cursor-pointer'>about</li>
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
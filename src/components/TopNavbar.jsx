import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import NavExtContent from './NavExtContent';

const TopNavbar = () => {

    const [hoverMenu, setHoverMenu] = useState('');

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
        <div className='fixed inset-0 z-[101] overflow-hidden'>
            <div className='w-full h-full'>
                <div ref={navBgRef} onMouseLeave={handleMouseLeavefromNav} className='absolute bg-black rotate-45 w-[80vw] h-[120vh] -top-[25vh] -right-[90vw] z-[0]'>

                    
                    <NavExtContent hoverMenu={hoverMenu}/>
                </div>
                

                <ul ref={navListRef} onMouseEnter={handleHoverOnNav} className='absolute right-12 text-black flex justify-end gap-5 z-[104] p-3 mt-0'>
                    <li className='cursor-pointer' onMouseOver={() => setHoverMenu("about")}>about</li>
                    <li className='cursor-pointer' onMouseOver={() => setHoverMenu("projects")}>projects</li>
                    <li className='cursor-pointer' onMouseOver={() => setHoverMenu("skills")}>skills</li>
                    <li className='cursor-pointer' onMouseOver={() => setHoverMenu("experience")}>experience</li>
                    <li className='cursor-pointer' onMouseOver={() => setHoverMenu("achievements")}>achievements</li>
                    <li className='cursor-pointer' onMouseOver={() => setHoverMenu("contact")}>contact</li>
                </ul>
            </div>


        </div>
    )
}

export default TopNavbar
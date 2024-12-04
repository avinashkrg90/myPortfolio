import React from 'react'

const NavExtContent = ({ hoverMenu }) => {
    return (
        <div className='z-[105] -rotate-45 pt-[95vh] -ml-[2vw] origin-left '>
            <div className='flex flex-col items-start w-full '>
                <div className='text-sky-500 text-[8vh] uppercase ml-0  border-sky-500 rounded-full p-4 px-10'>{hoverMenu}</div>
            </div>
        </div>
    )
}

export default NavExtContent
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const DesignationTypewriter = () => {
    const [text] = useTypewriter({
        words: ['Frontend Developer', 'Backend Developer', 'Full-stack Developer'],
        loop: {},
    })

    return (
        
        <div className='text-black text-[3rem] flex items-center pl-[9vw] mt-[10vh]'>
            <span className='mr-4 text-[4vh] -mb-2 font-NotoSans'>I am a</span>
            <div className='text-[6vh] text-pink-500 font-NotoSans'>
                <span>{text}</span>
                <span className='text-gray-400'>
                    <Cursor  />
                </span>
            </div>
        </div>
    )
}

export default DesignationTypewriter
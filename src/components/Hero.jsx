import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className ='text-[#ffffff] font-bold p-2'>A PROOF OF CONCEPT</p>
                <h1 className ='md: text-7xl sm: text-6xl text-4xl font bold'>TICKR. for Palantir</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Convenience for</p>
                    <ReactTyped 
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['Investors', 'Analysts', 'Traders', 'Managers']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop 
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>An all in one financial dashboard</p>
            </div>
        </div>
    )
}

export default Hero
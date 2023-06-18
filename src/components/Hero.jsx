import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-deep-green'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-beige`}> This is <span className='text-deep-green'>Vishesh</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-beige`}>
            He likes to experiment on codes and designs <br className='sm:block'/> for mobile and web applications. 
            <br className='sm:block'/> <br className='sm:block '/>  <span className='text-white italic '> It works on my machine! </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero
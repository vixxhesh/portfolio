import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { github } from "../assets";
import { SocialIcon } from 'react-social-icons';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

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
          {/* <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 relative object-contain'
              /> */}
          <p className={`${styles.heroSubText} mt-2 text-beige`}>
            He likes to experiment on codes and designs <br className='sm:block'/> for mobile and web applications. 
            <br className='sm:block'/> <br className='sm:block '/>  <span className='text-white italic '> It works on my machine! </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[44px] rounded-3xl border-4 border-l-green flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
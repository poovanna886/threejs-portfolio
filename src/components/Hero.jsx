import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'
import Computers from './canvas/Computers'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute insaet-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-4`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff] '>Poovanna</span></h1>
          
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop (sometimes design) user <br className='dm:block hidden' /> interfaces and interactive websites.
        </p>
        </div>
      </div>
        <ComputersCanvas />
        {/* <Computers /> */}
        <div className='absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[30px] h-[60px] rounded-3xl border-4 boreder-secondary flex justify-center items-start p-1'>
              <motion.dev
              animate={{y : [0,24,0]}}
               transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
               }}
               className='w-3 h-3 rounded-full bg-secondary mb-1'
               />

            </div>
          </a>

        </div>
    </section>
  )
}

export default Hero
//packages
import React from 'react'
import { motion } from 'framer-motion'

// components
import Button from '../components/Button'
import logo from '../assets/images/logo.svg'

const navStyles = 'max-w-[1200px] w-full flex justify-between items-center p-4 sm:p-10';

export default function HeaderWIP() {
  return (
    
    <div className={navStyles}>
        <motion.img 
        initial={{opacity: 0, x: -20}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5}}
        className='w-[100px]' src={logo} alt="frey logo" />
        <motion.div 
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
            className='flex gap-6 items-center'>
            <a href="https://twitter.com/frey_money" target='_blank' rel='noreferrer' className='hidden sm:block font-medium text-neutral-400'>Twitter</a>
            < a href="https://tally.so/r/mOaLok" target='_blank' rel='noreferrer'><Button label={'Join the waitlist'} style={'secondaryShort'}/></a>
        </motion.div>
    </div>
  )
}

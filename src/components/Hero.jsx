import product_image from '../assets/images/new-product-image.png'
import Button from './Button'
import logo from '../assets/images/logo.svg'

import { motion } from 'framer-motion'

export default function Hero() {


  const footnote = 'Get notified when FREY▲ is available on'

  return (
    <div className='flex flex-col items-center gap-6 sm:gap-11 mt-12'>
        <motion.div 
          initial={{opacity: 0, scale: 0.01}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 2, delay: 1}}
          className='flex flex-col items-center gap-2 sm:gap-6'>
            <motion.h5 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 2.5}}
            className='font-semibold text-neutral-400 text-sm sm:text-base'>COMING SOON</motion.h5>
            <motion.h1 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 1}}
            className='font-medium text-3xl sm:text-7xl text-center px-2 sm:p-0 max-w-[720px]'><span className='inline-flex items-baseline'><img src={logo} alt="logo" className='self-center h-12' /></span> is all your accounts in one app.</motion.h1>
            <motion.p 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 3}}
            className='text-black w-screen px-4   sm:w-2/4 text-center'>We're working hard to bring you the best banking experience. Join the waitlist to be the first to know when we launch.</motion.p>
        </motion.div>
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 4}}
          className='flex flex-col gap-4 items-center mb-8'> 
          {/* <WIPInput/> */}
          <a href="https://tally.so/r/mOaLok" target='_blank' rel='noreferrer'><Button label={'Join the waitlist'} style={'primaryLong'}/></a>
          <p className='text-neutral-400 text-center text-sm max-w-[256px]'>{footnote}<span className='font-semibold'> Test Flight</span></p>
        </motion.div>
        <motion.span
        whileHover={{scale: 1.05}}
        transition={{duration: 0.25}}>
        <motion.img 
          initial={{opacity: 0, y: 200}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.5}}
          className='sm:w-96' src={product_image} alt="frey product" />
          </motion.span>
    </div>
  )
}

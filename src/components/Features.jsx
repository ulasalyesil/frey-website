// packages
import { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { Component1Icon as Icon} from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

// components
import Button from './Button'

// assets
import img1 from '../assets/images/feature_illustration_1.svg'
import img3 from '../assets/images/feature_illustration_3.svg'

const content = {
  "item-1": {
    title: "Unified Dashboard",
    description: "Frey provides a unified dashboard displaying all bank accounts, and credit cards. This enables you to have a comprehensive overview of your finances without having to switch between accounts."
  },
  "item-2": {
    title: "Transaction History",
    description: "You can view your transaction history across all accounts in one place, making it easier to track your spending and identify areas where you can save money."
  },
  "item-3": {
    title: "Security",
    description: "Frey uses strong encryption and other security measures to protect users' financial data."
  }
}

const images = [img1, img3]

const itemStyle = 'flex flex-col bg-neutral-100 rounded-xl hover:bg-neutral-200 overflow-hidden first:mt-0'
const triggerStyle = 'p-4 w-full flex gap-2 items-center font-medium'
const contentStyle = 'text-sm text-neutral-500 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp'

export default function Features() {

  return (

    <motion.div
    className='flex flex-col gap-8 sm:gap-14 items-center'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5}}>

      <div className='flex flex-col gap-0 items-center'>
        <h2 className='font-semibold text-2xl text-black'>Essential Perfection.</h2>
        <h2 className='font-semibold text-2xl text-neutral-400'>Elevated.</h2>

      </div>

    <div className='flex flex-col sm:flex-row gap-8'>

      <Accordion.Root className='w-[348px] max-w-[348px] shrink-0 shadow-sm shadow-black/5 flex flex-col gap-2'
      defaultValue='item-1'
      type='single'
      collapsible>

        <Accordion.Item id='1' value="item-1" className={itemStyle}>
            <Accordion.Trigger className={triggerStyle}>
                <Icon/>
                {content['item-1'].title}
              </Accordion.Trigger>
              <Accordion.Content className={contentStyle}><div className='p-4 pt-0'>{content['item-1'].description}</div></Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id='2' value="item-2" className={itemStyle}>
          <Accordion.Trigger className={triggerStyle}>
              <Icon/>
              {content['item-2'].title}
          </Accordion.Trigger>
          <Accordion.Content className={contentStyle}><div className='p-4 pt-0'>{content['item-2'].description}</div></Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id='3' value="item-3" className={itemStyle}>
          <Accordion.Trigger className={triggerStyle}>
                <Icon/>
                {content['item-3'].title}
              </Accordion.Trigger>
          <Accordion.Content className={contentStyle}><div className='p-4 pt-0'>{content['item-3'].description}</div></Accordion.Content>
        </Accordion.Item>


      </Accordion.Root>

      <div className='w-[348px] flex justify-center shrink-1 relative bg-neutral-100 rounded-3xl overflow-hidden shadow-xl shadow-black/10'>
        <div className='absolute bottom-4 right-4 z-50'><a href="https://tally.so/r/mOaLok" target='_blank' rel='noreferrer'><Button label={'Learn More'} style={'primarySmall'}/></a></div>
        <img src={img1} alt='feature shot' className='w-64 absolute top-10' />
      </div>
    </div>
    </motion.div>
  )
}

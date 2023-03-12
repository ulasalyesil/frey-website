import React from 'react'
import logo from '../assets/images/logo-footer.svg'

export default function Footer() {
  return (
    <div className='flex justify-center sm:justify-between items-center w-full max-w-[1200px] mt-16 sm:mt-32 p-11'>
      <div className='flex flex-col items-center sm:items-end sm:flex-row gap-4'>
      <img src={logo} className='w-32' alt="frey logo" />
      <p className='text-sm text-neutral-400'>All Rights Reserved. 2023</p>
      </div>
      <ol className='gap-8 hidden sm:flex'>
        <li>
        <a href="https://twitter.com/frey_money" target='_blank' rel='noreferrer' className='font-medium text-neutral-400'>Twitter</a>
        </li>
        <li>
        <a href="mailto:ulas@frey.money" target='_blank' rel='noreferrer' className='font-medium text-neutral-400'>Contact Us</a>
        </li>
        <li>
        <a href="https://frey-money.notion.site/Privacy-Policy-c1ff16017e90469cbc1530807cf117e4" target='_blank' rel='noreferrer' className='font-medium text-neutral-400'>Privacy Policy</a>
        </li>
        <li>
        <a href="https://www.notion.so/frey-money/Terms-of-Use-0a642685662c480fb49fb9af675d1ef4?pvs=4" target='_blank' rel='noreferrer' className='font-medium text-neutral-400'>Terms of Use</a>
        </li>
      </ol>
    </div>
  )
}

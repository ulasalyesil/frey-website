import React from 'react'
import Button from '../components/Button'
import logo from '../assets/images/logo.svg'

export default function HeaderWIP() {
  return (
    <div className='max-w-[1200px] w-full flex justify-between items-center p-4 sm:p-10'>
        <img className='w-[100px]' src={logo} alt="frey logo" />
        <div className='flex gap-6 items-center'>
            <a href="https://twitter.com/frey_money" target='_blank' rel='noreferrer' className='hidden sm:block font-medium text-neutral-400'>Twitter</a>
            <Button label={'Join the waitlist'} style={'primary'}/>
        </div>
    </div>
  )
}

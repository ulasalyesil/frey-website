import React from 'react'
import plane from '../assets/icons/paper-plane.svg'

export default function WIPInput({placeholder}) {
  return (
    <form className='flex p-3 bg-black rounded-full shadow-xl relative'>
      <input type="email" placeholder={placeholder} className='rounded-full p-3 h-8 w-72 sm:h-11 sm:w-80' />
      <button type='submit' className='flex w-14 h-14 sm:w-11 sm:h-11 bg-black border-2 border-white rounded-full items-center justify-center absolute self-center right-0 sm:right-3 shadow-lg'>
        <img src={plane} alt="send icon" />
      </button>
    </form>
  )
}

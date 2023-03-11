import product_image from '../assets/images/product-image.png'
import WIPInput from './WIPInput'

export default function Hero() {
  return (
    <div className='flex flex-col items-center gap-6 sm:gap-11 mt-12'>
        <div className='flex flex-col items-center gap-2 sm:gap-4'>
            <h5 className='font-semibold text-neutral-400'>COMING SOON</h5>
            <h1 className='font-medium text-3xl sm:text-7xl text-center'><span className='font-black'>FREY▲</span> is all your accounts in one app.</h1>
        </div>
        <WIPInput/>
        <p className='text-neutral-400 text-center text-sm'>Get notified when FREY▲ is available on <span className='font-semibold'>Test Flight</span></p>
        <img className='sm:w-96' src={product_image} alt="frey product image" />
    </div>
  )
}

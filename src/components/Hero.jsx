import product_image from '../assets/images/product-image.png'
import Button from './Button'

export default function Hero() {

  const footnote = '*Join the waitlist to get notified when FREY▲ is available on'

  return (
    <div className='flex flex-col items-center gap-6 sm:gap-11 mt-12'>
        <div className='flex flex-col items-center gap-2 sm:gap-4'>
            <h5 className='font-semibold text-neutral-400'>COMING SOON</h5>
            <h1 className='font-medium text-3xl sm:text-7xl text-center max-w-[720px]'><span className='font-black'>FREY▲</span> is all your accounts in one app.</h1>
        </div>
        <div className='flex flex-col gap-4 items-center mb-8'> 
          {/* <WIPInput/> */}
          <a href="https://tally.so/r/mOaLok" target='_blank' rel='noreferrer'><Button label={'Join the waitlist'} style={'primaryLong'}/></a>
          <p className='text-neutral-400 text-center text-sm max-w-[256px]'>{footnote}<span className='font-semibold'> Test Flight</span></p>
        </div>
        <img className='sm:w-96' src={product_image} alt="frey product" />
    </div>
  )
}

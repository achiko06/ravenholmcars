import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components'

const Navbar = () => {
  return (
    <header className='w-full  absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.png'
            alt='logo'
            width={18}
            height={18}
            className='object-contain'
          />
          <span className='font-bold text-black ml-1'>
            RavenHolmCars
          </span>
        </Link>

        <Button
          title='Sign in'
          btnType='button'
          containerStyles='text-gray-700 font-bold rounded-full bg-white min-w-[130px] hover:text-primary-100 duration-700'
        />
      </nav>
    </header>
  )
}

export default Navbar
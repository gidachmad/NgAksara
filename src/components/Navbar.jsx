import React, { useState } from 'react'
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import ngaksaraLogo from '@/assets/ngaksara-logo.png'
import { route } from '@/routes/Routes'

export default function Navbar({ changeTheme, lightTheme }) {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <header
      id='navbar'
      className='border-b-2 sticky top-0 bg-white dark:bg-gray-900 duration-300'>
      <div className='flex w-5/6 py-4 mx-auto items-center'>
        <Link to='/' className=''>
          <img
            loading='lazy'
            src={ngaksaraLogo}
            alt='Logo NgAksara - Aksara Sunda'
            className='max-h-10 lg:max-h-14'
          />
        </Link>
        <nav className='ml-auto hidden md:block'>
          <ul className='flex space-x-6'>
            {route.map((item) => (
              <li key={item.name} className='basis-1'>
                <Link to={`${item.path}`} className='button hover-transition'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Bars3Icon
          onClick={() => setIsOpened(!isOpened)}
          className='w-10 h-10 ml-auto border border-coffee-800 p-2 block md:hidden hover:cursor-pointer'
        />
      </div>

      {/* mobile nav */}
      <nav className='block md:hidden relative w-full'>
        {isOpened && (
          <ul className='flex flex-col absolute bg-white w-full divide-y border shadow-lg '>
            {route.map((item) => (
              <Link
                onClick={() => setIsOpened(!isOpened)}
                to={`${item.path}`}
                className='capitalize hover-transition focus:bg-coffee-800'>
                <li key={item.name} className='basis-1 py-4 text-center'>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

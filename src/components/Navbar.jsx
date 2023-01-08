import React, { useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import ngaksaraLogo from '../assets/ngaksara-logo.png'
import { route } from '../Routes'

export default function Navbar() {
  const [isLightTheme, setIsLightTheme] = useState(true)

  const changeTheme = () => {
    setIsLightTheme(!isLightTheme)
  }

  return (
    <header id='navbar' className='border-b-2 sticky top-0 bg-white'>
      <div className='flex w-5/6 py-6 mx-auto items-center'>
        <Link to='/'>
          <img src={ngaksaraLogo} alt='' className='max-h-16' />
        </Link>
        <nav className='ml-auto'>
          <ul className='flex space-x-6'>
            {route.map((item) => (
              <Link
                key={item.name}
                to={`${item.path}`}
                className='button hover-transition'>
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        {/* <MoonIcon className='w-6 h-6' /> */}
        {/* <button
          className='ml-6 group relative border-2 border-coffee-900 hover:border-coffee-300 rounded-full p-1 hover-transition 
          '
          onClick={changeTheme}>
          {isLightTheme ? (
            <MoonIcon className='w-6 h-6 fill-coffee-900 group-hover:fill-coffee-300 dark:fill-coffee-200 hover-transition ' />
          ) : (
            <SunIcon className='w-6 h-6 fill-coffee-900 group-hover:fill-coffee-300 dark:fill-coffee-200 hover-transition ' />
          )}
          <span
            className='absolute pointer-events-none hidden group-hover:flex min-w-max left-1/2 -translate-x-1/2 -bottom-10
            px-2 py-1 bg-coffee-700 rounded-lg text-center text-white text-sm  '>
            Berubah ke mode {isLightTheme ? 'gelap' : 'terang'}
          </span>
        </button> */}
      </div>
    </header>
  )
}

import React, { useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import ngaksaraLogo from '@/assets/ngaksara-logo.png'
import { route } from '@/routes/Routes'

export default function Navbar({ changeTheme, lightTheme }) {
  return (
    <header
      id='navbar'
      className='border-b-2 sticky top-0 bg-white dark:bg-gray-900 duration-300'>
      <div className='flex w-5/6 py-4 mx-auto items-center'>
        <Link to='/'>
          <img src={ngaksaraLogo} alt='' className='max-h-14' />
        </Link>
        <nav className='ml-auto'>
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
        {/* <MoonIcon className='w-6 h-6' /> */}
        {/* <button
          className='ml-6 group relative border-2 hover:border-coffee-900 border-coffee-300 rounded-full p-1 hover-transition 
          '
          onClick={() => changeTheme()}>
          {lightTheme ? (
            <MoonIcon className='w-6 h-6 fill-coffee-900 group-hover:fill-coffee-900 dark:fill-coffee-300 hover-transition ' />
          ) : (
            <SunIcon className='w-6 h-6 fill-coffee-900 group-hover:fill-coffee-900 dark:fill-coffee-300 hover-transition ' />
          )}
          <span
            className='absolute pointer-events-none hidden group-hover:flex min-w-max left-1/2 -translate-x-1/2 -bottom-10
            px-2 py-1 bg-coffee-700 rounded-lg text-center text-white text-sm  '>
            Berubah ke mode {lightTheme ? 'gelap' : 'terang'}
          </span>
        </button> */}
      </div>
    </header>
  )
}

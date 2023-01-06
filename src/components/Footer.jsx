import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-coffee-900 text-white pb-4 text-center mt-auto'>
      <header className='text-2xl py-4 border-b w-1/3 mx-auto'>NgAksara</header>
      <p className='mt-2 text-lg'>
        &copy; Pigacu Creation - 2022 <br />
        &copy; Regid - {new Date().getFullYear()}
      </p>
    </footer>
  )
}

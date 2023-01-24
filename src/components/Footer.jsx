import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-coffee-900 text-white pb-4 text-center mt-auto'>
      <header className='text-2xl py-4 border-b w-1/3 mx-auto'>NgAksara</header>
      <p className='mt-2 text-lg w-1/3 mx-auto flex justify-between'>
        <span>&copy; Pigacu Creation - 2022</span>
        <span>&copy; Regid - {new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

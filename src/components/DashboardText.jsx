import { getImage } from '@/utils/utils'
import React from 'react'

export default function DashboardText({ title, text, img, option }) {
  return (
    <section
      className={`${
        option.bgColor ? 'bg-coffee-300 ' : ''
      } py-2 section space-y-8`}>
      <div className='w-4/5 mx-auto'>
        <header className='my-10 lg:my-20'>
          <h2 className='text-center text-xl md:text-3xl lg:text-4xl'>
            {title}
          </h2>
        </header>
        <article className='my-4 mt-10 flex flex-col lg:flex-row justify-evenly lg:space-x-6'>
          <p
            className={`basis-2/5 text-justify md:text-2xl ${
              option.inverse ? 'order-2' : 'order-2 lg:order-1'
            }`}>
            {text}
          </p>
          <div className='basis-2/5 pb-6 md:pb-0'>
            <img src={getImage(img)} alt={img} className='w-full' />
          </div>
        </article>
      </div>
    </section>
  )
}

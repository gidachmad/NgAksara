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
          <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
            {title}
          </h2>
        </header>
        <article className='my-4 mt-10 flex flex-col lg:flex-row justify-evenly lg:space-x-6'>
          <p
            className={`basis-2/5 text-justify md:text-xl lg:text-2xl ${
              option.inverse ? 'order-2' : 'order-2 lg:order-1'
            }`}>
            {text}
          </p>
          <div className='basis-2/5 pb-6 lg:pb-0'>
            <img
              loading='lazy'
              src={getImage(img)}
              alt={`image of ${img} in NgAksara - Aksara Sunda`}
              className='w-full'
            />
          </div>
        </article>
      </div>
    </section>
  )
}

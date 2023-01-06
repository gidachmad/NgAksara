import React from 'react'
import { getImage } from '../utils/utils'

export default function DashboardText({ title, text, img, option }) {
  return (
    <section
      className={`${option.bgColor ? 'bg-coffee-300 ' : ''} section space-y-8`}>
      <div className='w-4/5 mx-auto'>
        <header className='my-20'>
          <h2 className='text-center text-5xl'>{title}</h2>
        </header>
        <article className='my-4 mt-10 flex justify-evenly space-x-6'>
          <p
            className={`basis-2/5 text-justify text-2xl ${
              option.inverse ? 'order-2' : ''
            }`}>
            {text}
          </p>
          <div className='basis-2/5'>
            <img src={getImage(img)} alt={img} />
          </div>
        </article>
      </div>
    </section>
  )
}

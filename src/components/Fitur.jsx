import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from '@/utils/utils'

export default function Fitur({ img, title, text, path }) {
  return (
    <article className='bg-white flex flex-col md:flex-row p-6 lg:p-10 w-4/5 lg:w-2/3 mx-auto rounded-lg shadow-lg justify-evenly'>
      <div className='basis-2/6 lg:basis-2/6 xl:basis-1/6 aspect-square p-6 md:pb-0'>
        <img
          loading='lazy'
          src={getImage(img)}
          alt={`Image of fitur ${img} in NgAksara - Aksara Sunda`}
          className=' h-full'
        />
      </div>
      <div className='basis-1/2 lg:basis-1/2 xl:basis-4/6 flex flex-col '>
        <h3 className='text-lg md:text-xl xl:text-2xl mb-4'>{title}</h3>
        <p className='text-md lg:text-lg xl:text-xl mb-6'>{text}</p>
        <Link to={`/${path}`} className='button hover-transition mt-auto'>
          Lihat {title}
        </Link>
      </div>
    </article>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from '../utils/utils'

export default function Fitur({ img, title, text, path }) {
  return (
    <article className='bg-white flex p-10 w-2/3 mx-auto rounded-lg shadow-lg justify-evenly'>
      <div className='basis-1/6 aspect-square'>
        <img src={getImage(img)} alt={img} className=' h-full' />
      </div>
      <div className='basis-4/6 flex flex-col '>
        <h3 className='text-2xl mb-4'>{title}</h3>
        <p className='text-xl mb-6'>{text}</p>
        <Link to={`/${path}`} className='button hover-transition mt-auto'>
          Lihat {title}
        </Link>
      </div>
    </article>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from '../utils/utils'

export default function Fitur({ img, title, text, path }) {
  return (
    <article className='bg-white flex p-10 w-2/3 mx-auto rounded-lg shadow-lg justify-evenly'>
      <div className='basis-1/5'>
        <img src={getImage(img)} alt={img} />
      </div>
      <div className='basis-3/5'>
        <h3 className='text-2xl mb-4'>{title}</h3>
        <p className='text-xl mb-6'>{text}</p>
        <Link to={`/${path}`} className='button hover-transition'>
          Lihat {title}
        </Link>
      </div>
    </article>
  )
}

import React from 'react'
import { getImage } from '../utils/utils'

export default function Fitur({ img, title, text }) {
  return (
    <article className='bg-white flex p-10 w-2/3 mx-auto rounded-lg shadow-lg justify-evenly'>
      <div className='basis-1/5'>
        <img src={getImage(img)} alt={img} />
      </div>
      <div className='basis-3/5'>
        <h3 className='text-2xl mb-4'>{title}</h3>
        <p className='text-xl mb-6'>{text}</p>
        <button className='px-6 py-2 bg-coffee-500 text-white rounded hover:shadow-lg hover:bg-coffee-600 hover-transition'>
          Lihat Kelas
        </button>
      </div>
    </article>
  )
}

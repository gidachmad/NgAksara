import React from 'react'
import { Link } from 'react-router-dom'
import { aksaraSwara } from '../../mocks/kelas-swara'
import { getKelasAksara } from '../../utils/utils'

export default function Swara() {
  return (
    <>
      <header>
        <h1 className='text-center text-4xl mb-8'>Swara</h1>
      </header>
      <section className='grid grid-cols-6 gap-4 w-5/6 mx-auto mb-10'>
        {aksaraSwara.map((aksara) => (
          <Link
            key={aksara.name}
            to={`/kelas/swara/${aksara.name}`}
            className='p-6 bg-coffee-300 border rounded-lg shadow-inner hover:bg-coffee-400 hover-transition flex flex-col items-center'>
            <img
              src={getKelasAksara('Swara', aksara.img)}
              alt=''
              className=' max-h-16'
            />
            <p className='mt-4 text-xl'>
              <span className='capitalize'>{aksara.name}</span> {aksara.name}
            </p>
          </Link>
        ))}
      </section>
    </>
  )
}

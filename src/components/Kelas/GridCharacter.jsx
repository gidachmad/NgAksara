import { getKelasAksara } from '@/utils/utils'
import React from 'react'
import { Link } from 'react-router-dom'

export default function GridCharacter({ kelas, aksara }) {
  return (
    <section className='grid grid-cols-6 gap-4 w-5/6 mx-auto mb-10'>
      {aksara.map((item) => (
        <Link
          key={item.name}
          to={`/kelas/${kelas}/${item.name}`}
          className='p-6 bg-coffee-300 border rounded-lg shadow-inner hover:bg-coffee-400 hover-transition flex flex-col  items-center'>
          <div className='mb-2'>
            <img
              src={getKelasAksara(kelas, item.img)}
              alt=''
              className='h-16 m-auto'
            />
          </div>
          <p className='mt-auto text-xl capitalize'>{item.name}</p>
        </Link>
      ))}
    </section>
  )
}

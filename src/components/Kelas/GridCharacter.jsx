import { ScrollToTop } from '@/utils/ScrollToTop'
import React from 'react'
import { Link } from 'react-router-dom'
import { toSundanese } from 'sunda.js'

export default function GridCharacter({ kelas, aksara }) {
  ScrollToTop()
  return (
    <section className='grid grid-cols-6 gap-4 w-5/6 mx-auto mb-10'>
      {aksara.map((item) => (
        <Link
          key={item.name}
          to={`/kelas/${kelas}/${item.name}`}
          className='p-6 bg-coffee-300 border rounded-lg shadow-inner hover:bg-coffee-400 hover-transition flex flex-col  items-center'>
          <div className='mb-2'>
            <p className='text-7xl'>
              {item.unicode ? item.unicode : toSundanese(item.name)}
            </p>
            {/* <img
              src={
                item.img ? getKelasAksara(item.img) : getKelasAksara(item.name)
              }
              alt=''
              className='h-16 m-auto'
            /> */}
          </div>
          <p className='mt-auto text-xl capitalize'>{item.name}</p>
        </Link>
      ))}
    </section>
  )
}

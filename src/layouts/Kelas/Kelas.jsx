import React from 'react'

import { Link } from 'react-router-dom'
import { daftarKelas } from '@/mocks/kelas'
import { getThumbnailKelas } from '@/utils/utils'

export default function Kelas() {
  return (
    <>
      <header>
        <h1 className='header-style'>Daftar Kelas</h1>
      </header>
      {daftarKelas.map((kelas, index) => (
        <section
          key={index}
          className='flex flex-col lg:flex-row px-10 py-6 lg:py-20 mx-auto w-3/4 lg:w-3/5 justify-around items-center border-b-2 last:mb-10 last:border-0'>
          <div className='basis-2/5 mb-4'>
            <img
              src={getThumbnailKelas(kelas.name)}
              alt=''
              className='object-fill max-h-40 mx-auto'
            />
          </div>
          <div className='basis-2/5'>
            <h2 className='text-center text-3xl mb-4 lg:mb-8 capitalize'>
              {kelas.name}
            </h2>
            <button>
              <Link
                to={`/kelas/${kelas.name}`}
                className='button hover-transition'>
                Belajar {kelas.name}
              </Link>
            </button>
          </div>
        </section>
      ))}
    </>
  )
}

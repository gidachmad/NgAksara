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
          className='flex flex-col sm:flex-row px-8 py-10 md:py-20 mx-auto w-3/4 lg:w-3/5 justify-around items-center border-b-2 last:mb-10 last:border-0'>
          <div className='basis-2/5 mb-4'>
            <img
              loading='lazy'
              src={getThumbnailKelas(kelas.name)}
              alt={`Thumbnail for ${kelas.name} in NgAksara - Aksara Sunda`}
              className='object-fill max-h-40 mx-auto'
            />
          </div>
          <div className='basis-2/5'>
            <h2 className='text-center sm:text-left text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 capitalize'>
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

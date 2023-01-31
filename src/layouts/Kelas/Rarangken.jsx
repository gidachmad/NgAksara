import { getThumbnailKelas } from '@/utils/utils'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Rarangken() {
  const rarangkenData = [
    {
      title: 'Aturan Rarangkén',
      img: 'Rarangken',
      desc: 'Lihat aturan-aturan penggunaan rarangkén dalam aksara sunda',
      path: 'aturan',
    },
  ]

  return (
    <>
      <header>
        <h1 className='header-style'>Rarangkén</h1>
      </header>

      <div className='flex justify-around w-4/5 mx-auto'>
        {rarangkenData.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            img={data.img}
            desc={data.desc}
            path={data.path}
          />
        ))}

        <Outlet />
        {/* <Card
          title={'Aturan Rarangkén'}
          img={'Ngalagena'}
          desc={'Lihat aturan penggunaan rarangkén'}
          path={'contohrarangker'}
        /> */}
      </div>
    </>
  )
}

function Card({ title, img, desc, path }) {
  return (
    <section className='basis-2/5 p-4 bg-coffee-300 border border-coffee-600 rounded-md shadow-md'>
      <div className='bg-white rounded-md p-8 h-60 flex items-center'>
        <img
          src={getThumbnailKelas(img)}
          alt=''
          className='m-auto max-h-full'
        />
      </div>
      <h2 className='text-center text-2xl my-4'>{title}</h2>
      <p className='text-justify text-xl '>{desc}</p>

      <Link to={path}>lihat {path}</Link>
    </section>
  )
}

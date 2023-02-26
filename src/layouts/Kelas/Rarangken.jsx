import { aksaraRarangken } from '@/mocks/kelas'
import { convertRarangken } from '@/utils/rarangken'
import React from 'react'
import { Link } from 'react-router-dom'
import { toSundanese } from 'sunda.js'

export default function Rarangken() {
  return (
    <>
      <header>
        <h1 className='header-style'>Rarangkén</h1>
      </header>

      <section className='w-3/5 mx-auto mb-20'>
        {aksaraRarangken.map((item) => (
          <Card
            rarangken={item.name}
            aksara={'ka'}
            desc={item.desc}
            key={item.name}
          />
        ))}
        <Link to='/kelas/ngalagena'>
          <button className='bg-coffee-200 w-full p-4 rounded shadow-inner hover:bg-coffee-900 hover:text-coffee-200 hover-transition'>
            Coba dengan aksara ngalagena
          </button>
        </Link>
      </section>
    </>
  )
}

function Card({ rarangken, aksara, desc }) {
  const aksaraWithRarangken = convertRarangken(rarangken, aksara)

  return (
    <section className='flex justify-around space-x-8 my-8'>
      <div className='basis-1/5 flex px-10 py-8 border rounded-md border-coffee-900 aspect-square'>
        <h2 className='text-5xl m-auto'>{toSundanese(aksaraWithRarangken)}</h2>
      </div>

      <div className='basis-full bg-coffee-200 p-4 rounded-md'>
        <p className='text-2xl capitalize mb-2'>{aksara}</p>
        <p className=''>{desc}</p>
      </div>
    </section>
  )
}

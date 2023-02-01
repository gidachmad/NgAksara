import { aksaraRarangken } from '@/mocks/kelas'
import { ScrollToTop } from '@/utils/ScrollToTop'
import { getRarangkenThumb } from '@/utils/utils'
import React from 'react'

export default function Rarangken() {
  return (
    <>
      <header>
        <h1 className='header-style'>Rarangkén</h1>
      </header>

      <section className='w-3/5 mx-auto mb-20'>
        {aksaraRarangken.map((item) => (
          <Card
            name={item.name}
            aksara={'ka'}
            desc={item.desc}
            key={item.name}
          />
        ))}
        <button className='bg-coffee-200 w-full p-4 rounded shadow-inner hover:bg-coffee-900 hover:text-coffee-200 hover-transition'>
          Coba dengan aksara ngalagena
        </button>
      </section>
    </>
  )
}

function Card({ name, aksara, desc }) {
  let aksaraWithRarangken
  switch (name) {
    case 'panghulu':
      aksaraWithRarangken = aksara[0] + 'i'
      break
    case 'pamepet':
      aksaraWithRarangken = aksara[0] + 'e'
      break
    case 'paneuleung':
      aksaraWithRarangken = aksara[0] + 'eu'
      break
    case 'panglayar':
      aksaraWithRarangken = aksara + 'r'
      break
    case 'panyecek':
      aksaraWithRarangken = aksara + 'ng'
      break
    case 'panyuku':
      aksaraWithRarangken = aksara[0] + 'u'
      break
    case 'panyakra':
      aksaraWithRarangken = aksara[0] + 'r' + aksara[1]
      break
    case 'panyiku':
      aksaraWithRarangken = aksara[0] + 'l' + aksara[1]
      break
    case 'panéléng':
      aksaraWithRarangken = aksara[0] + 'é'
      break
    case 'panolong':
      aksaraWithRarangken = aksara[0] + 'o'
      break
    case 'pamingkal':
      aksaraWithRarangken = aksara[0] + 'y' + aksara[1]
      break
    case 'pangwisad':
      aksaraWithRarangken = aksara + 'h'
      break
    case 'pamaéh':
      aksaraWithRarangken = aksara[0]
      break
    default:
      aksaraWithRarangken = name
      break
  }

  return (
    <section className='flex justify-around space-x-8 my-8'>
      <div className='basis-1/6 flex px-10 py-8 border rounded-md border-coffee-900 aspect-square'>
        <img
          src={getRarangkenThumb(aksaraWithRarangken)}
          alt=''
          className='m-auto w-full'
        />
      </div>

      <div className='basis-full bg-coffee-200 p-4 rounded-md'>
        <p className='text-2xl capitalize mb-2'>{name}</p>
        <p className=''>{desc}</p>
      </div>
    </section>
  )
}

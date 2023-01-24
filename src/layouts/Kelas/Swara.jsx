import GridCharacter from '@/components/Kelas/GridCharacter'
import React from 'react'
import { aksaraSwara } from '@/mocks/kelas'

export default function Swara() {
  return (
    <>
      <header>
        <h1 className='header-style'>Swara</h1>
      </header>

      <GridCharacter kelas={'swara'} aksara={aksaraSwara} />
    </>
  )
}

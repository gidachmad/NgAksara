import GridCharacter from '@/components/Kelas/GridCharacter'
import React from 'react'
import { aksaraSwara } from '@/mocks/kelas-swara'

export default function Swara() {
  return (
    <>
      <header>
        <h1 className='text-center text-4xl mb-8'>Swara</h1>
      </header>

      <GridCharacter kelas={'Swara'} aksara={aksaraSwara} />
    </>
  )
}

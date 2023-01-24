import GridCharacter from '@/components/Kelas/GridCharacter'
import { aksaraAngka } from '@/mocks/kelas'
import React from 'react'

export default function Angka() {
  return (
    <>
      <header>
        <h1 className='header-style'>Angka</h1>
      </header>

      <GridCharacter kelas={'angka'} aksara={aksaraAngka} />
    </>
  )
}

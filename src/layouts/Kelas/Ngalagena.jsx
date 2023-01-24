import GridCharacter from '@/components/Kelas/GridCharacter'
import { aksaraNgalagena } from '@/mocks/kelas'
import React from 'react'

export default function Ngalagena() {
  return (
    <>
      <header>
        <h1 className='header-style'>Ngalagena</h1>
      </header>

      <GridCharacter kelas={'ngalagena'} aksara={aksaraNgalagena} />
    </>
  )
}

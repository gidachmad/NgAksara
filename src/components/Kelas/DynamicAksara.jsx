import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  aksaraAngka,
  aksaraNgalagena,
  aksaraRarangken,
  aksaraSwara,
} from '@/mocks/kelas'
import { getKelasAksara, getRarangken } from '@/utils/utils'

export default function DynamicAksara({ kelas }) {
  const { name } = useParams()
  const [listAksara, setListAksara] = useState([])

  useEffect(() => {
    let data = []
    switch (kelas) {
      case 'swara':
        data = aksaraSwara
        break
      case 'angka':
        data = aksaraAngka
        break
      case 'ngalagena':
        data = aksaraNgalagena
        break
    }

    const filterArray = data.filter((aksara) => aksara.name == name)
    setListAksara(filterArray)
  }, [kelas])

  return kelas == 'ngalagena' ? (
    <Ngalagena listAksara={listAksara} />
  ) : (
    <Aksara listAksara={listAksara} kelas={kelas} />
  )
}

function Aksara({ listAksara, kelas }) {
  return (
    listAksara.length > 0 && (
      <>
        <div className='w-fit mx-auto border border-coffee-800 p-10'>
          <img
            src={
              listAksara[0].img
                ? getKelasAksara(listAksara[0].img)
                : getKelasAksara(listAksara[0].name)
            }
            alt={`Aksara ${listAksara[0].name} dari ${kelas}`}
            className='h-20 m-auto'
          />
        </div>
        <h3 className='capitalize text-center text-2xl mt-6'>
          {listAksara[0].name}
          {kelas == 'angka' && <> | {listAksara[0].number}</>}
        </h3>
      </>
    )
  )
}

function Ngalagena({ listAksara }) {
  return (
    listAksara.length > 0 && (
      <>
        <div className='w-fit mx-auto border border-coffee-800 p-10'>
          <img
            src={
              listAksara[0].img
                ? getKelasAksara(listAksara[0].img)
                : getKelasAksara(listAksara[0].name)
            }
            alt={`Aksara ${listAksara[0].name} dari Ngalagena`}
            className='h-20 m-auto'
          />
        </div>
        <h3 className='capitalize text-center text-2xl mt-6'>
          {listAksara[0].name}
        </h3>
        <div className='w-4/5 my-8 mx-auto grid grid-cols-5 gap-4 '>
          {aksaraRarangken.map((aksara) => (
            <div className='border border-coffee-900 p-4 flex justify-center'>
              <div className='w-fit max-w-[50px] m-auto'>
                <img
                  src={getRarangken(aksara.name)}
                  alt={`Rarangken ${aksara.name}`}
                  className='max-h-[60px]'
                />
              </div>
              <div className='text-center'>
                <p>{aksara.name}</p>
                <p>{aksara.symbol}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  )
}

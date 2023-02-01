import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { aksaraAngka, aksaraNgalagena, aksaraSwara } from '@/mocks/kelas'
import { getKelasAksara } from '@/utils/utils'

export default function DynamicAksara({ kelas }) {
  const { name } = useParams()
  console.log(name)
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

  return (
    <div>
      {listAksara.length > 0 && (
        <>
          <div className='w-fit mx-auto border border-coffee-800 p-10'>
            <img
              src={
                listAksara[0].img
                  ? getKelasAksara(listAksara[0].img)
                  : getKelasAksara(listAksara[0].name)
              }
              alt=''
              className='h-20 m-auto'
            />
          </div>
          <h3 className='capitalize text-center text-2xl mt-6'>
            {listAksara[0].name}
            {kelas == 'angka' && <> | {listAksara[0].number}</>}
          </h3>
        </>
      )}
    </div>
  )
}

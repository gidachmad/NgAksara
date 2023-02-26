import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import {
  aksaraAngka,
  aksaraNgalagena,
  aksaraRarangken,
  aksaraSwara,
} from '@/mocks/kelas'
import { getKelasAksara, getRarangken } from '@/utils/utils'
import { toSundanese } from 'sunda.js'
import { convertRarangken } from '@/utils/rarangken'

export default function DynamicAksara({ kelas }) {
  const { name } = useParams()
  const [listAksara, setListAksara] = useState([])
  const [rarangken, setRarangken] = useState([])

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
    listAksara.length > 0 &&
    (kelas == 'ngalagena' ? (
      <Ngalagena listAksara={listAksara} />
    ) : (
      <Aksara listAksara={listAksara} kelas={kelas} />
    ))
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
  const [aksara, setAksara] = useState(listAksara[0].name)
  const [rarangkenVokal, setRarangkenVokal] = useState('')
  const [rarangkenTengah, setRarangkenTengah] = useState('')
  const [rarangkenAkhir, setRarangkenAkhir] = useState('')

  const onClickRarangken = (rarangken) => {
    if (rarangken.name != 'pamaéh' && rarangkenAkhir == 'pamaéh')
      setRarangkenAkhir('')

    if (rarangken.name == rarangkenVokal) {
      setAksara(listAksara[0].name)
      return setRarangkenVokal('')
    }

    if (rarangken.name == rarangkenTengah) {
      setAksara(aksara.substring(0, 1) + aksara.substring(2))
      return setRarangkenTengah('')
    }

    if (rarangken.name == rarangkenAkhir) return setRarangkenAkhir('')

    addRarangken(rarangken.name)
  }

  const addRarangken = (rarangken) => {
    // rarangken array => [vokal, tengah, akhir]
    switch (rarangken) {
      // vokal
      case 'panghulu':
        setRarangkenVokal('panghulu')
        break
      case 'pamepet':
        setRarangkenVokal('pamepet')
        break
      case 'paneuleung':
        setRarangkenVokal('paneuleung')
        break
      case 'panyuku':
        setRarangkenVokal('panyuku')
        break
      case 'panéléng':
        setRarangkenVokal('panéléng')
        break
      case 'panolong':
        setRarangkenVokal('panolong')
        break
      // tengah
      case 'panyakra':
        setRarangkenTengah('panyakra')
        break
      case 'panyiku':
        setRarangkenTengah('panyiku')
        break
      case 'pamingkal':
        setRarangkenTengah('pamingkal')
        break
      // akhir
      case 'panglayar':
        setRarangkenAkhir('panglayar')
        break
      case 'panyecek':
        setRarangkenAkhir('panyecek')
        break
      case 'pangwisad':
        setRarangkenAkhir('pangwisad')
        break
      // unik pamaeh
      default:
        setRarangkenVokal('')
        setRarangkenTengah('')
        setRarangkenAkhir('pamaéh')
        break
    }
  }

  useMemo(() => {
    let newAksara = listAksara[0].name
    const rarangkenArray = [rarangkenVokal, rarangkenTengah, rarangkenAkhir]

    rarangkenArray.forEach((rarangken) => {
      if (rarangken == '') return
      newAksara = convertRarangken(rarangken, newAksara)
    })
    setAksara(newAksara)
  }, [rarangkenVokal, rarangkenTengah, rarangkenAkhir])

  return (
    aksara.length > 0 && (
      <>
        <h2 className='w-fit mx-auto text-8xl mb-6 border border-coffee-800 p-10'>
          {toSundanese(aksara)}
        </h2>
        <h3 className='capitalize text-center text-2xl mt-6'>{aksara}</h3>
        <section className='w-3/4 my-8 mx-auto grid grid-cols-5 gap-4'>
          {aksaraRarangken.map((rarangken) => (
            <div
              className='border border-coffee-900 rounded-md p-4 flex justify-evenly hover:bg-coffee-500 hover-transition hover:cursor-pointer'
              onClick={() => onClickRarangken(rarangken)}>
              <p className='text-6xl text-center'>{rarangken.unicode}</p>
              <div className='text-center my-auto'>
                <p>{rarangken.name}</p>
                <p>{rarangken.symbol}</p>
              </div>
            </div>
          ))}
        </section>
      </>
    )
  )
}

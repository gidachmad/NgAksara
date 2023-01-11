import React from 'react'
import { useParams } from 'react-router-dom'
import { aksaraSwara } from '../../mocks/kelas-swara'
import { getKelasAksara } from '../../utils/utils'

export default function DynamicAksara() {
  const { name } = useParams()

  const data = aksaraSwara.filter((aksara) => aksara.name === name)
  console.log(data[0])

  return (
    <div>
      DynamicAksara {data[0].name}
      <img src={getKelasAksara('Swara', data[0].img)} alt='' />
    </div>
  )
}

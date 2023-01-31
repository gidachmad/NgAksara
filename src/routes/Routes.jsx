import Dashboard from '@/layouts/Dashboard'
import Kelas from '@/layouts/Kelas/Kelas'
import Angka from '@/layouts/Kelas/Angka'
import Swara from '@/layouts/Kelas/Swara'
import Konverter from '@/layouts/Konverter'
import Ngalagena from '@/layouts/Kelas/Ngalagena'
import Rarangken from '@/layouts/Kelas/Rarangken'
import AturanRarangken from '@/layouts/Kelas/AturanRarangken'

export const route = [
  {
    name: 'beranda',
    path: '',
    element: <Dashboard />,
  },
  {
    name: 'kelas',
    path: 'kelas',
    element: <Kelas />,
    children: [
      {
        name: 'angka',
        path: 'angka',
        element: <Angka />,
      },
      {
        name: 'swara',
        path: 'swara',
        element: <Swara />,
      },
      {
        path: 'ngalagena',
        name: 'ngalagena',
        element: <Ngalagena />,
      },
      {
        path: 'rarangkén',
        name: 'rarangkén',
        element: <Rarangken />,
        children: [
          {
            path: 'aturan',
            name: 'aturan',
            element: <AturanRarangken />,
          },
        ],
      },
    ],
  },
  {
    name: 'konverter',
    path: 'konverter',
    element: <Konverter />,
  },
]

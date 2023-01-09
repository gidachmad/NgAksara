import Dashboard from './layouts/Dashboard'
import Kelas from './layouts/Kelas/Kelas'
import Swara from './layouts/Kelas/Swara'
import Konverter from './layouts/Konverter'

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
        name: 'swara',
        path: 'swara',
        element: <Swara />,
      },
    ],
  },
  {
    name: 'konverter',
    path: 'konverter',
    element: <Konverter />,
  },
]

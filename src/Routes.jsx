import Dashboard from './layouts/Dashboard'
import Kelas from './layouts/Kelas'
import Konverter from './layouts/Konverter'

export const route = [
  {
    name: 'Beranda',
    path: '',
    element: <Dashboard />,
  },
  {
    name: 'kelas',
    path: '/kelas',
    element: <Kelas />,
  },
  {
    name: 'konverter',
    path: '/konverter',
    element: <Konverter />,
  },
]

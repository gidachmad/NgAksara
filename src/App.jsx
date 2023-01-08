import Dashboard from './layouts/Dashboard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen text-coffee-900'>
        <div className='flex-grow flex-shrink-0 basis-auto'>
          <Navbar />
          <main className='pt-8 '>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { ScrollToTop } from './utils/ScrollToTop'

export default function App() {
  const [lightTheme, setLightTheme] = useState(true)

  const changeTheme = () => {
    setLightTheme(!lightTheme)
  }

  ScrollToTop()
  return (
    <div className={`${lightTheme ? '' : 'dark'}`}>
      <div className='flex flex-col min-h-screen text-coffee-900 dark:text-coffee-500 '>
        <div className='flex-grow flex-shrink-0 basis-auto dark:bg-gray-900 transition-all duration-300'>
          <Navbar changeTheme={changeTheme} lightTheme={lightTheme} />
          <main className='pt-8 '>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

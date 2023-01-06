import Dashboard from './layouts/Dashboard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='flex-grow flex-shrink-0 basis-auto'>
          <Navbar />
          <main className='pt-8 '>
            <Dashboard />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

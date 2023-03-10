import React from 'react'
import ngaksaraBanner from '@/assets/dashboard/ngaksara-banner.png'
import DashboardText from '@/components/DashboardText'
import { dashboardText, fiturText } from '@/mocks/mock-dasboard'
import Fitur from '@/components/Fitur'

export default function Dashboard() {
  return (
    <>
      <header className='w-4/5 lg:w-3/5 mx-auto py-2 pb-12 lg:pb-20'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mb-10 lg:mb-20'>
          Selamat datang di NgAksara!
        </h1>
        <img
          loading='lazy'
          src={ngaksaraBanner}
          alt='Banner of NgAksara - Aksara Sunda'
          className='mb-5 lg:mb-10'
        />
      </header>

      {dashboardText.map((item) => (
        <DashboardText
          key={JSON.stringify(item.name)}
          title={item.title}
          text={item.text}
          img={item.img}
          option={item.option}
        />
      ))}

      <section className='bg-coffee-300 section space-y-6 lg:space-y-8 py-6 lg:py-12'>
        <header className='my-1 lg:my-4'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
            Fitur
          </h2>
        </header>
        {fiturText.map((item) => (
          <Fitur
            key={item.title}
            title={item.title}
            text={item.text}
            path={item.path}
            img={item.img}
          />
        ))}
      </section>
    </>
  )
}

import React from 'react'
import ngaksaraBanner from '@/assets/dashboard/ngaksara-banner.png'
import DashboardText from '@/components/DashboardText'
import { dashboardText, fiturText } from '@/mocks/mock-dasboard'
import Fitur from '@/components/Fitur'
import { toSundanese } from 'sunda.js'

export default function Dashboard() {
  return (
    <>
      <header className='w-3/5 mx-auto py-2 pb-28'>
        <h1 className='text-center text-5xl mb-20'>
          Selamat datang di NgAksara!
        </h1>
        <img src={ngaksaraBanner} alt='' className='mb-10' />
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

      <section className='bg-coffee-300 section space-y-8 py-12'>
        <header className='my-4'>
          <h2 className='text-center text-5xl'>Fitur</h2>
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

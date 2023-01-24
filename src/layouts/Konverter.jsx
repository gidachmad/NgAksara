import React, { useState } from 'react'
import { HotKeys } from 'react-hotkeys'
import { toSundanese } from 'sunda.js'

export default function Konverter() {
  const [latin, setLatin] = useState('')
  const [sunda, setSunda] = useState('')

  const convertToSunda = (e) => {
    const word = e.target.value

    setLatin(word)
    setSunda(toSundanese(word))
  }

  const insertEAcute = () => {
    const word = latin + 'é'

    setLatin(word)
    setSunda(toSundanese(word))
  }

  const keyMap = {
    INSERT_E_ACUTE: 'Control+Alt+e',
    // this is a workaraound when spacebar is pressed the hotkeys is stopped
    GRAB_CURSOR: { sequence: 'SPACE_BAR', action: 'keydown' },
    DEFAULT_CURSOR: { sequence: 'SPACE_BAR', action: 'keyup' },
  }

  const handlers = {
    INSERT_E_ACUTE: insertEAcute,
  }

  return (
    <>
      <header>
        <h1 className='header-style'> Konverter </h1>
      </header>
      <div className='flex mx-auto w-4/5 mb-20 justify-around '>
        <div className='basis-2/6 bg-coffee-200 px-4 py-8 rounded-md'>
          <h2 className='text-center text-2xl mb-4 '> Aksara Latin</h2>
          <HotKeys handlers={handlers} keyMap={keyMap} allowChanges>
            <textarea
              type='text'
              className='border border-coffee-500 resize-none w-full aspect-video text-xl p-2 rounded-md'
              value={latin}
              onChange={convertToSunda}></textarea>
          </HotKeys>
          <p className='text-justify mt-1'>
            Untuk memasukan huruf &eacute; ke dalam teks bisa tekan tombol
            dibawah atau menekan kombinasi shortcut "Control + Alt + E" (untuk
            desktop)
          </p>
          <button
            onClick={insertEAcute}
            className='py-1 px-4 border border-coffee-900 rounded-md mt-1 hover-transition hover:bg-coffee-900 hover:text-white'>
            Tambah/Sisipkan &eacute;
          </button>
        </div>
        <div className='basis-3/6 bg-coffee-200 px-4 py-8 rounded-md'>
          <h2 className='text-center text-2xl mb-4'> Aksara Sunda </h2>
          <textarea
            type='text'
            className='border border-coffee-500 resize-none w-full aspect-video text-3xl p-2'
            value={sunda}
            readOnly></textarea>
        </div>
      </div>
    </>
  )
}

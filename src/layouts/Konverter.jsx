import React, { useState } from 'react'
import { HotKeys } from 'react-hotkeys'
import { toSundanese } from 'sunda.js'

export default function Konverter() {
  const [latin, setLatin] = useState('')
  const [sunda, setSunda] = useState('')

  const keyMap = {
    INSERT_E_ACUTE: 'Control+Alt+e',
  }

  const inserteacute = (event) => {
    console.log('is clicekd')
    console.log(event)
  }
  const handlers = {
    INSERT_E_ACUTE: inserteacute,
  }

  const convertToSunda = (e) => {
    const word = e.target.value

    setLatin(word)
    setSunda(toSundanese(word))
  }

  const insertEAcute = (e) => {
    const word = e.target.textContent

    setLatin(latin + word)
    setSunda(toSundanese(latin + word))
  }

  return (
    <>
      <HotKeys handlers={handlers} keyMap={keyMap}>
        <button
          className='p-10 border border-coffee-500'
          onClick={insertEAcute}>
          &eacute;
        </button>
        <div>
          <input
            type='text'
            className='border border-coffee-500'
            value={latin}
            onChange={convertToSunda}
          />
        </div>
        <div>
          <input
            type='text'
            className='border border-coffee-500'
            value={sunda}
          />
        </div>
      </HotKeys>
    </>
  )
}

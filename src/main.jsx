import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Router from './routes/Router'
import { configure } from 'react-hotkeys'

configure({
  ignoreEventsCondition: () => {
    return false
  },
  ignoreTags: ['input', 'select', 'textarea'],
  customKeyCodes: {
    10009: 'inserteacute',
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<>loading ...</>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)

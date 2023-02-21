import React from 'react'
import ReactDom from 'react-dom/client'

import {AppProvider} from './context'

import App from './App'



const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
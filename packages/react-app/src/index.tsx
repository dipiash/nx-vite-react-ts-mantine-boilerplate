import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const Renderer: FC = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

const container = document.querySelector('#root')
const root = createRoot(container as Element)

root.render(<Renderer />)

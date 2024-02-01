import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'


import { AppRouter } from './router/AppRouter.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AppRouter/>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

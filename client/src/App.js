import { ChakraProvider } from '@chakra-ui/react'
import { RosterProvider } from './context/RosterContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Results from './pages/Results'

const app = () => {
  return (
    <div className="app">
      <ChakraProvider>
        <RosterProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </BrowserRouter>
        </RosterProvider>
      </ChakraProvider>
    </div>
  )
}

export default app

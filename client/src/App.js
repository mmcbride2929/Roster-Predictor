import { ChakraProvider } from '@chakra-ui/react'
import { RosterProvider } from './context/RosterContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Results from './pages/Results'
import Header from './components/global/Header'
import { myTheme } from './theme/theme'

const app = () => {
  return (
    <div className="app">
      <ChakraProvider theme={myTheme}>
        <RosterProvider>
          <BrowserRouter>
            <Header />
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

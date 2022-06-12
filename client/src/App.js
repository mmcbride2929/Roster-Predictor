import { ChakraProvider } from '@chakra-ui/react'
import { HomeProvider } from './context/HomeContext'

import Home from './pages/Home'

const app = () => {
  return (
    <div className="app">
      <ChakraProvider>
        <HomeProvider>
          <Home />
        </HomeProvider>
      </ChakraProvider>
    </div>
  )
}

export default app

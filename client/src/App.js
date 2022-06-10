import { ChakraProvider } from '@chakra-ui/react'

import Home from './pages/Home'

const app = () => {
  return (
    <div className="app">
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </div>
  )
}

export default app

import { useState, createContext } from 'react'

const HomeContext = createContext()

export const HomeProvider = ({ children }) => {
  // homepage state
  const [allPlayers, setAllPlayers] = useState([])
  const [finalRoster, setFinalRoster] = useState([])

  return (
    <HomeContext.Provider
      value={{ allPlayers, setAllPlayers, finalRoster, setFinalRoster }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export default HomeContext

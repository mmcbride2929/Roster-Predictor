import { useState, createContext } from 'react'

const RosterContext = createContext()

export const RosterProvider = ({ children }) => {
  // homepage state
  const [allPlayers, setAllPlayers] = useState([])
  const [finalRoster, setFinalRoster] = useState([])

  return (
    <RosterContext.Provider
      value={{ allPlayers, setAllPlayers, finalRoster, setFinalRoster }}
    >
      {children}
    </RosterContext.Provider>
  )
}

export default RosterContext

import { useState, createContext } from 'react'

const RosterContext = createContext()

export const RosterProvider = ({ children }) => {
  //
  const [allPlayers, setAllPlayers] = useState([])
  const [finalRoster, setFinalRoster] = useState([])
  const [filterArray, setFilterArray] = useState([])
  const [filter, setFilter] = useState(false)

  return (
    <RosterContext.Provider
      value={{
        allPlayers,
        setAllPlayers,
        finalRoster,
        setFinalRoster,
        filterArray,
        setFilterArray,
        filter,
        setFilter,
      }}
    >
      {children}
    </RosterContext.Provider>
  )
}

export default RosterContext

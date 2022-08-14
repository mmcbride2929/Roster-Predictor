import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react'

import AllPlayersTable from '../components/Home/AllPlayersTable'
import FinalRosterTable from '../components/Home/FinalRosterTable'
import FilterByContainer from '../components/Home/FilterByContainer'
import RosterContext from '../context/RosterContext'
import PlayerCounter from '../components/Home/PlayerCounter'
import ResultsButton from '../components/Home/ResultsButton'

const Home = () => {
  const { allPlayers, setAllPlayers, finalRoster } = useContext(RosterContext)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRoster = async () => {
      const response = await axios.get(`http://localhost:5000/api/v1/roster`)

      setAllPlayers(response.data)
      setLoading(false)
    }

    if (finalRoster.length === 0) {
      fetchRoster()
    } else {
      setLoading(false)
    }
  }, [])
  return (
    <>
      {loading ? (
        <Box>Loading</Box>
      ) : (
        <Box p="15px">
          <PlayerCounter />
          <FilterByContainer />
          <AllPlayersTable roster={allPlayers} />
          <FinalRosterTable />
          <ResultsButton />
        </Box>
      )}
    </>
  )
}
export default Home

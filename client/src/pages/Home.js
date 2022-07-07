import axios from 'axios'
import { useState, useContext, useEffect } from 'react'

import AllPlayersTable from '../components/Home/AllPlayersTable'
import FinalRosterTable from '../components/Home/FinalRosterTable'
import FilterByContainer from '../components/Home/FilterByContainer'
import Submit from '../components/Home/Submit'
import RosterContext from '../context/RosterContext'
import PlayerCounter from '../components/Home/PlayerCounter'

const Home = () => {
  const { allPlayers, setAllPlayers } = useContext(RosterContext)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRoster = async () => {
      const response = await axios.get(`http://localhost:5000/api/v1/roster`)

      setAllPlayers(response.data)

      setLoading(false)
    }

    fetchRoster()
  }, [])
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <FilterByContainer />

          <AllPlayersTable roster={allPlayers} />
          <PlayerCounter />
          <FinalRosterTable />
          <Submit />
        </>
      )}
    </>
  )
}
export default Home

import axios from 'axios'
import { useState, useContext, useEffect } from 'react'

import AllPlayersTable from '../components/Home/AllPlayersTable'
import FinalRosterTable from '../components/Home/FinalRosterTable'
import Submit from '../components/Home/Submit'
import RosterContext from '../context/RosterContext'

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
          <AllPlayersTable roster={allPlayers} />
          <FinalRosterTable />
          <Submit />
        </>
      )}
    </>
  )
}
export default Home

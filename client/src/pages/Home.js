import axios from 'axios'
import { useState, useContext, useEffect } from 'react'

import AllPlayersTable from '../components/Home/AllPlayersTable'
import FinalRosterTable from '../components/Home/FinalRosterTable'
import HomeContext from '../context/HomeContext'

const Home = () => {
  const { allPlayers, setAllPlayers } = useContext(HomeContext)

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
        </>
      )}
    </>
  )
}
export default Home

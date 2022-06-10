import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import AllPlayersTable from '../components/Home/AllPlayersTable'
import FinalRosterTable from '../components/Home/FinalRosterTable'

const Home = () => {
  const [roster, setRoster] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRoster = async () => {
      const response = await axios.get(`http://localhost:5000/api/v1/roster`)

      setRoster(response.data)
      
      setLoading(false)
    }

    const players = fetchRoster()
  }, [])
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <AllPlayersTable roster={roster} />

          <FinalRosterTable />
        </>
      )}
    </>
  )
}
export default Home

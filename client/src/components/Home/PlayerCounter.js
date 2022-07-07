import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'
const PlayerCounter = () => {
  const { finalRoster } = useContext(RosterContext)
  return (
    <div>
      <h3>Final Roster Players:</h3>
      <p>{finalRoster.length}</p>
    </div>
  )
}
export default PlayerCounter

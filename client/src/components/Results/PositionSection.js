import { useState, useEffect } from 'react'

const PositionSection = ({ finalRoster, playerPosition }) => {
  const [positionRoom, setPositionRoom] = useState([])

  const filterPosition = () => {
    const filteredPlayers = finalRoster.filter(
      (player) => player.position === playerPosition
    )

    return filteredPlayers
  }

  useEffect(() => {
    setPositionRoom(filterPosition())
  }, [])
  return (
    <div>
      <p>{playerPosition}</p>
      {positionRoom.map((player) => {
        return <p key={player._id}>{player.name}</p>
      })}
    </div>
  )
}
export default PositionSection

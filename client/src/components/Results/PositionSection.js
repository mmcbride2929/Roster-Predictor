import { useState, useEffect } from 'react'

const PositionSection = ({ finalRoster, playerPosition }) => {
  const [positionRoom, setPositionRoom] = useState([])

  const filterPosition = () => {
    const filteredPlayers = finalRoster.filter(
      (player) => player.position === playerPosition
    )
    console.log(playerPosition)
    return filteredPlayers
  }

  useEffect(() => {
    setPositionRoom(filterPosition())
  }, [])
  return (
    <div>
      <p>{playerPosition}</p>
      {positionRoom.map((p) => {
        return (
          <div>
            <p>{p.name}</p>
          </div>
        )
      })}
    </div>
  )
}
export default PositionSection

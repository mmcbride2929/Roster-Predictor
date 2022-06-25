import { Select } from '@chakra-ui/react'
import { useContext } from 'react'

import RosterContext from '../../context/RosterContext'

const PositionSelect = () => {
  const { allPlayers, setAllPlayers, setFilterArray, setFilter } =
    useContext(RosterContext)

  const handleChange = (position) => {
    if (position.target.value === 'All') {
      setFilterArray([])
      setFilter(false)
    } else {
      setFilterArray(
        allPlayers.filter((player) => player.position === position.target.value)
      )
      setFilter(true)
    }
  }

  return (
    <Select onChange={handleChange}>
      <option value="All" selected>
        All
      </option>
      <option value="QB">QB</option>
      <option value="WR">WR</option>
      <option value="RB">RB</option>
      <option value="TE">TE</option>
      <option value="T">T</option> <option value="IOL">IOL</option>
      <option value="CB">CB</option> <option value="S">S</option>
      <option value="DL">DL</option> <option value="DE">DE</option>
      <option value="LB">LB</option> <option value="OLB">OLB</option>
      <option value="K">K</option>
      <option value="P">P</option>
    </Select>
  )
}
export default PositionSelect

import { SearchIcon } from '@chakra-ui/icons'
import RosterContext from '../../context/RosterContext'
import { Input } from '@chakra-ui/react'
import { useContext, useState } from 'react'

const SearchBar = () => {
  const {
    allPlayers,
    setFilterArray,
    selectFilter,
    setInputFilter,
    filterByName,
    filterByPosition,
  } = useContext(RosterContext)

  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.target.value)
    setInputFilter(e.target.value)

    if (e.target.value === '' && selectFilter === 'All') {
      setFilterArray([])
    }

    if (e.target.value !== '' && selectFilter === 'All') {
      setFilterArray(filterByName(e.target.value))
    }

    if (e.target.value !== '' && selectFilter !== 'All') {
      const matches = filterByName(e.target.value)
      setFilterArray(filterByPosition(matches, selectFilter))
    }

    if (e.target.value === '' && selectFilter !== 'All') {
      setFilterArray(filterByPosition(allPlayers, selectFilter))
    }
  }

  return (
    <>
      <SearchIcon />s
      <Input
        variant="outline"
        onChange={handleChange}
        placeholder="Search All Players"
      />
    </>
  )
}
export default SearchBar

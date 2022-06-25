import { SearchIcon } from '@chakra-ui/icons'

import { Input } from '@chakra-ui/react'

const SearchBar = () => {
  return (
    <>
      <SearchIcon />
      <Input variant="outline" placeholder="Search All Players" />
    </>
  )
}
export default SearchBar

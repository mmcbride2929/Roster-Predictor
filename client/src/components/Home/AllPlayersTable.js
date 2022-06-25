import { chakra, Flex, Box, Button, SimpleGrid } from '@chakra-ui/react'
import { useContext } from 'react'

import RosterContext from '../../context/RosterContext'
import TableRow from './TableRow'

const AllPlayersTable = () => {
  const {
    allPlayers,
    setAllPlayers,
    finalRoster,
    setFinalRoster,
    filterArray,
    setFilterArray,
    filter,
  } = useContext(RosterContext)

  const handleAdd = (playerName) => {
    // get selected player object from allPlayers
    const promotedPlayerObject = allPlayers.filter(
      (p) => p.name === playerName.target.value
    )

    // add playerObject to finalRoster
    setFinalRoster([...finalRoster, promotedPlayerObject[0]])

    // remove chosen player in allPlayers
    setAllPlayers(
      allPlayers.filter((p) => {
        return p.name !== playerName.target.value
      })
    )

    // deleting player from filter array
    setFilterArray(
      filterArray.filter((p) => {
        return p.name !== playerName.target.value
      })
    )
  }

  return (
    <Flex
      maxW="700px"
      bg="blue"
      p="20px"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        direction={{ base: 'column' }}
        w="full"
        bg={{ md: 'green' }}
        shadow="lg"
      >
        {filter
          ? filterArray.map((p) => {
              return <TableRow key={p._id} player={p} handleAdd={handleAdd} />
            })
          : allPlayers.map((p) => {
              return <TableRow key={p._id} player={p} handleAdd={handleAdd} />
            })}
      </Box>
    </Flex>
  )
}

export default AllPlayersTable

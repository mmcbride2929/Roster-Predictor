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
    selectFilter,
    inputFilter,
  } = useContext(RosterContext)

  const handleAdd = (playerName) => {
    if (finalRoster.length < 53) {
      // get selected player object from allPlayers
      const promotedPlayerObject = allPlayers.filter(
        (p) => p.name === playerName
      )

      // add playerObject to finalRoster
      setFinalRoster([...finalRoster, promotedPlayerObject[0]])

      // remove chosen player in allPlayers
      setAllPlayers(
        allPlayers.filter((p) => {
          return p.name !== playerName
        })
      )

      // deleting player from filter array
      setFilterArray(
        filterArray.filter((p) => {
          return p.name !== playerName
        })
      )
    }
  }

  return (
    <Flex maxW="700px" alignItems="center" justifyContent="center">
      <Box
        border="1px solid black"
        direction={{ base: 'column' }}
        w="full"
        mt="15px"
        shadow="lg"
      >
        {selectFilter !== 'All' || inputFilter !== ''
          ? filterArray.map((p) => {
              return (
                <TableRow
                  key={p._id}
                  player={p}
                  handleAction={handleAdd}
                  Icon="add"
                />
              )
            })
          : allPlayers.map((p) => {
              return (
                <TableRow
                  key={p._id}
                  player={p}
                  handleAction={handleAdd}
                  Icon="add"
                />
              )
            })}
      </Box>
    </Flex>
  )
}

export default AllPlayersTable

import { chakra, Flex, Box, Button, SimpleGrid } from '@chakra-ui/react'
import { useContext } from 'react'

import RosterContext from '../../context/RosterContext'

const AllPlayersTable = () => {
  const { allPlayers, setAllPlayers, finalRoster, setFinalRoster } =
    useContext(RosterContext)

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
  }

  return (
    <Flex
      w="full"
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
        {allPlayers.map((p) => {
          return (
            <Flex
              direction={{ base: 'column', md: 'column' }}
              bg="silver"
              key={p._id}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ base: 3, md: 3 }}
                w={{ base: 'full', md: 'full' }}
                textTransform="uppercase"
                bg="purple"
                color="gold"
                py={{ base: 1, md: 4 }}
                px={{ base: 0, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
              >
                <span>Name</span>
                <span>Email</span>
                <chakra.span textAlign={{ md: 'right' }}>Actions</chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 3, md: 3 }}
                w="full"
                py={2}
                px={0}
                fontWeight="hairline"
              >
                <span>{p.name}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {p.number}
                </chakra.span>
                <Flex justify={{ md: 'end' }}>
                  <Button
                    variant="solid"
                    colorScheme="red"
                    size="sm"
                    value={p.name}
                    onClick={handleAdd}
                  >
                    Promote
                  </Button>
                </Flex>
              </SimpleGrid>
            </Flex>
          )
        })}
      </Box>
    </Flex>
  )
}

export default AllPlayersTable

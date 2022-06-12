import { chakra, Flex, Box, Button, SimpleGrid } from '@chakra-ui/react'

import { useContext } from 'react'

import HomeContext from '../../context/HomeContext'

const FinalRosterTable = () => {
  const { allPlayers, setAllPlayers, finalRoster, setFinalRoster } =
    useContext(HomeContext)

  const handleDelete = (e) => {
    console.log(e.target.value)
  }

  return (
    <Flex
      w="full"
      bg="yellow"
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
        {finalRoster.map((p) => {
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
                    onClick={handleDelete}
                  >
                    Remove
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
export default FinalRosterTable

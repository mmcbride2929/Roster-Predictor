import {
  chakra,
  Flex,
  useColorModeValue,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react'

const AllPlayersTable = ({ roster }) => {
  return (
    <Flex w="full" bg="blue" p={50} alignItems="center" justifyContent="center">
      <Stack
        direction={{ base: 'column' }}
        w="full"
        bg={{ md: 'green' }}
        shadow="lg"
      >
        {roster.map((person) => {
          return (
            <Flex
              direction={{ base: 'row', md: 'column' }}
              bg="silver"
              key={person._id}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 3 }}
                w={{ base: 120, md: 'full' }}
                textTransform="uppercase"
                bg="purple"
                color="gold"
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
              >
                <span>Name</span>
                <span>Email</span>
                <chakra.span textAlign={{ md: 'right' }}>Actions</chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 3 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span>{person.name}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {person.number}
                </chakra.span>
                <Flex justify={{ md: 'end' }}>
                  <Button variant="solid" colorScheme="red" size="sm">
                    Delete
                  </Button>
                </Flex>
              </SimpleGrid>
            </Flex>
          )
        })}
      </Stack>
    </Flex>
  )
}

export default AllPlayersTable

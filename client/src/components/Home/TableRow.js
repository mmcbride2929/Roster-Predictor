import { chakra, Flex, Box, Button, SimpleGrid } from '@chakra-ui/react'

import GlobalButton from '../global/GlobalButton'

const TableRow = ({ player, handleAdd }) => {
  return (
    <Flex
      direction={{ base: 'column', md: 'column' }}
      bg="silver"
      key={player._id}
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
        <chakra.span>Name</chakra.span>
        <chakra.span>Position</chakra.span>
        <chakra.span>Number</chakra.span>
      </SimpleGrid>
      <SimpleGrid
        spacingY={3}
        columns={{ base: 4, md: 4 }}
        w="full"
        py={2}
        px={0}
        fontWeight="hairline"
      >
        <chakra.span>{player.name}</chakra.span>
        <chakra.span
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {player.position}
        </chakra.span>
        <chakra.span
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {player.number}
        </chakra.span>
        <Flex justify={{ md: 'end' }}>
          <GlobalButton
            color={'teal'}
            value={player.name}
            size={'sm'}
            text={'PROMOTE'}
            onClick={handleAdd}
          >
            Promote
          </GlobalButton>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}
export default TableRow

import { Button, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'

const CopyButton = ({ test }) => {
  const { handleCopy } = useContext(RosterContext)

  return (
    <Box ml="10px">
      <Button
        onClick={() => handleCopy(test)}
        size="sm"
        w="65px"
        variant="outline"
      >
        Copy
      </Button>
    </Box>
  )
}
export default CopyButton

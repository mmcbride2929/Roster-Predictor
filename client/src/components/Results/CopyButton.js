import { Button, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'

const CopyButton = () => {
  const { clipboard } = useContext(RosterContext)

  const handleCopy = () => {
    const clipboardCopy = [...clipboard]
    const arrayToString = clipboardCopy.toString().replace(/,/g, '\n')

    navigator.clipboard.writeText(arrayToString)
  }

  return (
    <Box ml="10px">
      <Button onClick={handleCopy} size="sm" w="65px" variant="outline">
        Copy
      </Button>
    </Box>
  )
}
export default CopyButton

import { Button } from '@chakra-ui/react'

const GlobalButton = ({ text, color, size, onClick, value }) => {
  return (
    <Button colorScheme={color} size={size} onClick={onClick} value={value}>
      {text}
    </Button>
  )
}
export default GlobalButton

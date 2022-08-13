import { Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <Box ml="10px">
      <Link to="/">
        <Button size="sm" variant="outline">
          Home
        </Button>
      </Link>
    </Box>
  )
}
export default HomeButton

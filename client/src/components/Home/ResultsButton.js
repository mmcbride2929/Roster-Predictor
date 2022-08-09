import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ResultsButton = () => {
  return (
    <Box textAlign="center" mt="15px">
      <Button size="sm" variant="outline">
        <Link to="/results">Results</Link>
      </Button>
    </Box>
  )
}
export default ResultsButton

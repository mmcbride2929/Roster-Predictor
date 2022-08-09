import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <div>
      <Button size="sm" variant="outline">
        <Link to="/">Home</Link>
      </Button>
    </div>
  )
}
export default HomeButton

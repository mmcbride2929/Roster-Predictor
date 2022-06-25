import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Submit = () => {
  return (
    <div>
      <Button>
        <Link to="/results">Submit</Link>
      </Button>
    </div>
  )
}
export default Submit

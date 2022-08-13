import Logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'
import { chakra, Image, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      bg="gray"
      justifyContent="
    center"
      alignItems="center"
      p="20px"
    >
      <Link to="/">
        <Image src={Logo} w="40px" alt="Ravens Logo" />
      </Link>
    </Flex>
  )
}
export default Footer

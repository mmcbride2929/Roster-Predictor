import { Button, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CopyButton = () => {
  const { clipboard } = useContext(RosterContext)

  const handleCopy = () => {
    const clipboardCopy = [...clipboard]
    const arrayToString = clipboardCopy.toString().replace(/,/g, '\n')

    navigator.clipboard.writeText(arrayToString)

    toast.success('Copied!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <Box ml="10px">
      <Button onClick={handleCopy} size="sm" w="65px" variant="outline">
        Copy
      </Button>
      <ToastContainer />
    </Box>
  )
}
export default CopyButton

import SectionContainer from '../components/Results/SectionContainer'
import HomeButton from '../components/Results/HomeButton'
import CopyButton from '../components/Results/CopyButton'
import { Box } from '@chakra-ui/react'

const Results = () => {
  return (
    <>
      <SectionContainer />
      <Box display="flex">
        <HomeButton />
        <CopyButton />
      </Box>
    </>
  )
}
export default Results

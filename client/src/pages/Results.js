import SectionContainer from '../components/Results/SectionContainer'
import HomeButton from '../components/Results/HomeButton'
import CopyButton from '../components/Results/CopyButton'
import { Box } from '@chakra-ui/react'
import ResultsHeader from '../components/Results/ResultsHeader'

const Results = () => {
  return (
    <Box p="15px">
      <ResultsHeader />
      <SectionContainer />

      <Box display="flex" mt="15px" justifyContent="center">
        <HomeButton />
        <CopyButton />
      </Box>
    </Box>
  )
}
export default Results

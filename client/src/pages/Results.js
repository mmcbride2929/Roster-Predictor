import SectionContainer from '../components/Results/SectionContainer'
import HomeButton from '../components/Results/HomeButton'
import CopyButton from '../components/Results/CopyButton'
import { Box } from '@chakra-ui/react'
import ResultsHeader from '../components/Results/ResultsHeader'
import ScrollToTop from '../components/Results/ScrollToTop'

const Results = () => {
  const test = (
    <p>
      <SectionContainer />
    </p>
  )

  return (
    <ScrollToTop>
      <Box p="15px" maxW="900px" m="0px auto">
        <ResultsHeader />
        <SectionContainer />
        <Box display="flex" mt="15px" justifyContent="center">
          <HomeButton />
          <CopyButton test={test} />
        </Box>
      </Box>
    </ScrollToTop>
  )
}
export default Results

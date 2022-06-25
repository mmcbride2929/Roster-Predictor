import { useContext } from 'react'
import ResultsTable from '../components/Results/ResultsTable'

import RosterContext from '../context/RosterContext'

const Results = () => {
  const { finalRoster } = useContext(RosterContext)
  return (
    <>
      <ResultsTable finalRoster={finalRoster} />
    </>
  )
}
export default Results

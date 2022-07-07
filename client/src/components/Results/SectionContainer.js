import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'
import PositionSection from './PositionSection'

// create state that tells whether or not a section has been selected. render sections conditionally based on if anything has been selected or not

const SectionContainer = () => {
  const { finalRoster } = useContext(RosterContext)
  return (
    <div>
      <PositionSection finalRoster={finalRoster} playerPosition={'QB'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'RB'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'FB'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'TE'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'WR'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'T'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'IOL'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'DL'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'OLB'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'LB'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'CB'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'S'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'K'} />
      <PositionSection finalRoster={finalRoster} playerPosition={'P'} />
    </div>
  )
}
export default SectionContainer

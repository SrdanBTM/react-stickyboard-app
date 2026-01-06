

import styles from './filterButtons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../contexts/MainContext.jsx'


export default function DatedAllButton() {

  const {
    setCurrentBoardPanel,
    setCurrentBoardId,
    setSearchValue,
    setDatedNextDaysValue,
    selectedFilterButton, setSelectedFilterButton } = useContext(MainContext)


  function handleClick() {
    setCurrentBoardId(null)
    setSearchValue('')
    setCurrentBoardPanel('filter')
    setDatedNextDaysValue('all')
    setSelectedFilterButton('datedAll')
  }


  return (
    <button
      className={`${styles.container} ${selectedFilterButton === 'datedAll' ? styles.selected : ''} `}
      onClick={handleClick}
    >
      All dated
    </button>
  )
}
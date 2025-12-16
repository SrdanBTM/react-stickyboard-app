

import styles from './datedAllButton.module.css'
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
    <div className={styles.container}>
      <button
        onClick={handleClick}
        style={{
          border: selectedFilterButton === 'datedAll' ? '1px solid rgba(255,255,255,0.5)' : '',
          borderRadius: selectedFilterButton === 'datedAll' ? '5px' : ''
        }}
      >
        All dated
      </button>
    </div>
  )
}
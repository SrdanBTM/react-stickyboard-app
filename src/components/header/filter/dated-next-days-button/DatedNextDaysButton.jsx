

import styles from './datedNextDaysButton.module.css'
import { MainContext } from '../../../../contexts/MainContext.jsx'
import { useContext, useEffect, useState } from 'react'


export default function DatedNextDaysButton() {

  const [datedNextDaysNumber, setDatedNextDaysNumber] = useState(3)
  const {
    datedNextDaysValue,
    setDatedNextDaysValue,
    setCurrentBoardPanel,
    setCurrentBoardId,
    setSearchValue,
    selectedFilterButton, setSelectedFilterButton } = useContext(MainContext)


  useEffect(() => {
    if (datedNextDaysValue === undefined) return
    setDatedNextDaysNumber(prev => datedNextDaysValue === 'all' ? prev : datedNextDaysValue)
  }, [datedNextDaysValue])


  function handleClick() {
    setCurrentBoardId(null)
    setSearchValue('')
    setCurrentBoardPanel('filter')
    setSelectedFilterButton('datedNextDays')
    setDatedNextDaysValue(datedNextDaysNumber)
  }


  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        style={{
          border: selectedFilterButton === 'datedNextDays' ? '1px solid rgba(255,255,255,0.5)' : '',
          borderRadius: selectedFilterButton === 'datedNextDays' ? '5px' : ''
        }}
      >
        {`Dated - Next ${datedNextDaysNumber} days`}
      </button>
    </div>
  )
}
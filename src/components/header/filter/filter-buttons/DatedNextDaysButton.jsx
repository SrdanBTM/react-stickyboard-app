

import styles from './filterButtons.module.css'
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
    <div
      className={`${styles.container} ${selectedFilterButton === 'datedNextDays' ? styles.selected : ''} `}
      onClick={handleClick}
    >
      {`Next ${datedNextDaysNumber} days dated`}
    </div>
  )
}
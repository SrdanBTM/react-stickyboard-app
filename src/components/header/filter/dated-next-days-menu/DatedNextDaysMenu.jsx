

import styles from './datedNextDaysMenu.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../contexts/MainContext.jsx'
import { ClickOutsideElementContext } from '../../../../contexts/ClickOutsideElementContext.jsx'


export default function DatedNextDaysMenu({ datedNextDaysList, isFilterDatedMenuShow, setIsFilterDatedMenuShow }) {


  const { isClickedOutsideFilter } = useContext(ClickOutsideElementContext)
  const {
    setCurrentBoardId,
    setSearchValue,
    setCurrentBoardPanel,
    setSelectedFilterButton,
    setDatedNextDaysValue } = useContext(MainContext)


  function handleClick(nextDaysValue) {
    setIsFilterDatedMenuShow(false)
    setDatedNextDaysValue(nextDaysValue)

    setCurrentBoardId(null)
    setSearchValue('')
    setCurrentBoardPanel('filter')
    setSelectedFilterButton('datedNextDays')
  }



  return (
    <div
      className={styles.container}
      style={{
        opacity: isFilterDatedMenuShow && !isClickedOutsideFilter? 1 : 0,
        pointerEvents: isFilterDatedMenuShow && !isClickedOutsideFilter ? 'auto' : 'none'
      }}
    >
      <ul>
        {datedNextDaysList.map(item => (
          <li key={item.value} onClick={() => handleClick(item.value)}>{item.label}</li>)
        )}
      </ul>
    </div>
  )
}
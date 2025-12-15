

import styles from './datedNextDaysMenu.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../contexts/MainContext.jsx'


export default function DatedNextDaysMenu({ datedNextDaysList, isFilterDatedMenuShow, setIsFilterDatedMenuShow }) {


  const { setDatedNextDaysValue } = useContext(MainContext)


  function handleClick(nextDaysValue) {
    setIsFilterDatedMenuShow(false)
    setDatedNextDaysValue(nextDaysValue)
  }


  return (
    <div
      className={styles.container}
      style={{
        opacity: isFilterDatedMenuShow ? 1 : 0,
        pointerEvents: isFilterDatedMenuShow ? 'auto' : 'none'
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
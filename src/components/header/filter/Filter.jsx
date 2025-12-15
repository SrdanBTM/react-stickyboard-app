

import styles from './filter.module.css'
import DatedAllButton from './dated-all-button/DatedAllButton.jsx'
import DatedNextDaysButton from './dated-next-days-button/DatedNextDaysButton.jsx'
import DatedNextDaysMenuIcon from './dated-next-days-menu-icon/DatedNextDaysMenuIcon.jsx'
import DatedNextDaysMenu from './dated-next-days-menu/DatedNextDaysMenu.jsx'
import { useState } from 'react'


export default function Filter() {

  const datedNextDaysList = [
    { label: 'Next 3 days', value: 3},
    { label: 'Next 10 days', value: 10},
    { label: 'Next 30 days', value: 30},
  ]


  const [isFilterDatedMenuShow, setIsFilterDatedMenuShow] = useState(false)


  return (
    <div className={styles.container}>

      <span>Show: </span>

      <DatedAllButton />

      <span>|</span>

      <DatedNextDaysButton
        datedNextDaysList={datedNextDaysList}
      />

      <DatedNextDaysMenuIcon
        setIsFilterDatedMenuShow={setIsFilterDatedMenuShow}
      />

      <DatedNextDaysMenu
        datedNextDaysList={datedNextDaysList}
        isFilterDatedMenuShow={isFilterDatedMenuShow}
        setIsFilterDatedMenuShow={setIsFilterDatedMenuShow}
      />

    </div>
  )
}
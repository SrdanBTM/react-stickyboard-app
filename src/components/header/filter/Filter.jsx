

import styles from './filter.module.css'
import DatedAllButton from './filter-buttons/DatedAllButton.jsx'
import DatedNextDaysButton from './filter-buttons/DatedNextDaysButton.jsx'
import DatedNextDaysMenuIcon from './dated-next-days-menu-icon/DatedNextDaysMenuIcon.jsx'
import DatedNextDaysMenu from './dated-next-days-menu/DatedNextDaysMenu.jsx'
import { IconFilter } from '../../../icons/Icons.jsx'
import { useState } from 'react'


export default function Filter() {

  const datedNextDaysList = [
    { label: 'Next 3 days', value: 3 },
    { label: 'Next 10 days', value: 10 },
    { label: 'Next 30 days', value: 30 },
  ]


  const [isFilterDatedMenuShow, setIsFilterDatedMenuShow] = useState(false)


  return (
    <div className={styles.container}>

      <div className={styles.filterIcon}>
        <IconFilter />
      </div>

      <div className={styles.allDated}>
        <DatedAllButton />
      </div>

      <div className={styles.nextDaysDated}>
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



    </div>
  )
}
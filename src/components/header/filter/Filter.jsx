

import styles from './filter.module.css'
import AllDatedButton from './all-dated-button/AllDatedButton.jsx'
import DatedNextDaysButton from './dated-next-days-button/DatedNextDaysButton.jsx'
import DatedNextDaysMenuIcon from './dated-next-days-menu-icon/DatedNextDaysMenuIcon.jsx'
import DatedNextDaysMenu from './dated-next-days-menu/DatedNextDaysMenu.jsx'
import { useState } from 'react'


export default function Filter() {

  const filterDatedListTitle = [`Next 3 day`, 'Next 10 days', 'Next 30 days']

  const [filterDatedTitle, setFilterDatedTitle] = useState(filterDatedListTitle[0])
  const [isFilterDatedMenuShow, setIsFilterDatedMenuShow] = useState(false)


  return (
    <div className={styles.container}>

      <span>Show: </span>

      <AllDatedButton />

      <span>|</span>

      <DatedNextDaysButton
        filterDatedTitle={filterDatedTitle}
      />

      <DatedNextDaysMenuIcon
        setIsFilterDatedMenuShow={setIsFilterDatedMenuShow}
      />

      <DatedNextDaysMenu
        filterDatedListTitle={filterDatedListTitle}
        setFilterDatedTitle={setFilterDatedTitle}
        isFilterDatedMenuShow={isFilterDatedMenuShow}
        setIsFilterDatedMenuShow={setIsFilterDatedMenuShow}
      />

    </div>
  )
}
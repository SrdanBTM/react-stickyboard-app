

import styles from './datedNextDays.module.css'
import { useState } from 'react'
import DatedMenuIcon from './dated-menu-icon/DatedMenuIcon.jsx'
import DatedMenu from './dated-menu/DatedMenu.jsx'
import DatedButton from './dated-button/DatedButton.jsx'


export default function DatedNextDays() {

  


  return (
    <div className={styles.container}>

      <DatedButton
        filterDatedTitle={filterDatedTitle}
      />

      <DatedMenuIcon
        setIsFilterDatedMenuShow={setIsFilterDatedMenuShow}
      />

      <DatedMenu
        filterDatedListTitle={filterDatedListTitle}
        setFilterDatedTitle={setFilterDatedTitle}
        isFilterDatedMenuShow={isFilterDatedMenuShow}
        setIsFilterDatedMenuShow={setIsFilterDatedMenuShow}
      />

    </div>
  )
}
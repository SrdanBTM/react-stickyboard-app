

import styles from './showDated.module.css'
import { useState } from 'react'
import DatedMenuIcon from './dated-menu-icon/DatedMenuIcon.jsx'
import DatedMenu from './dated-menu/DatedMenu.jsx'
import DatedButton from './dated-button/DatedButton.jsx'


export default function ShowDated() {

  const filterDatedListTitle = ['Next 3 days', 'Next 10 days', 'Next 30 days']

  const [filterDatedTitle, setFilterDatedTitle] = useState(filterDatedListTitle[0])
  const [isFilterDatedMenuShow, setIsFilterDatedMenuShow] = useState(false)


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
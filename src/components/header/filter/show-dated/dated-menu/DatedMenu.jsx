

import styles from './datedMenu.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'


export default function DatedMenu() {

  const { isFilterDatedMenuShow, filterDatedListTitle, setFilterDatedTitle, setIsFilterDatedMenuShow } = useContext(MainContext)



  function handleClick(title) {
    setFilterDatedTitle(title)
    setIsFilterDatedMenuShow(false)
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
        <li onClick={() => handleClick(filterDatedListTitle[0])}>{filterDatedListTitle[0]}</li>
        <li onClick={() => handleClick(filterDatedListTitle[1])}>{filterDatedListTitle[1]}</li>
        <li onClick={() => handleClick(filterDatedListTitle[2])}>{filterDatedListTitle[2]}</li>
      </ul>
    </div>
  )
}
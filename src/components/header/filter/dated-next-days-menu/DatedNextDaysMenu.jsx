

import styles from './datedNextDaysMenu.module.css'


export default function DatedNextDaysMenu({ filterDatedListTitle, setFilterDatedTitle, isFilterDatedMenuShow, setIsFilterDatedMenuShow}) {

  
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
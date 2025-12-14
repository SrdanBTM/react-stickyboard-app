

import styles from './datedNextDaysMenuIcon.module.css'


export default function DatedNextDaysMenuIcon({setIsFilterDatedMenuShow}) {

  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    setIsFilterDatedMenuShow(prev => !prev)
  }


  return (
    <div 
    className={styles.container}
    onClick={handleClick}
    >
      <img src={`${BASE_URL}images/icon-down-arrow1.png`} alt='down arrow' />
    </div>
  )
}
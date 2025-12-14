

import styles from './datedMenuIcon.module.css'


export default function DatedMenuIcon({setIsFilterDatedMenuShow}) {

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
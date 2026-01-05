

import styles from './datedNextDaysMenuIcon.module.css'
import { IconDown } from '../../../../icons/Icons'


export default function DatedNextDaysMenuIcon({ setIsFilterDatedMenuShow }) {

  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    setIsFilterDatedMenuShow(prev => !prev)
  }


  return (
    <div
      className={`${styles.container} icon iconNormal`}
      onClick={handleClick}
    >
      <IconDown />
    </div>
  )
}


import styles from './datedNextDaysMenuButton.module.css'
import { IconDown } from '../../../../icons/Icons'


export default function DatedNextDaysMenuButton({ setIsFilterDatedMenuShow }) {


  function handleClick() {
    setIsFilterDatedMenuShow(prev => !prev)
  }


  return (
    <button
      className={`${styles.container} icon iconNormal`}
      onClick={handleClick}
    >
      <IconDown />
    </button>
  )
}
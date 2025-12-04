

import styles from './datedMenuIcon.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'


export default function DatedMenuIcon() {

  const { setIsFilterDatedMenuShow } = useContext(MainContext)
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
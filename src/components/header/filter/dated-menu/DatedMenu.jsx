

import styles from './datedMenu.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'


export default function DatedMenu() {

  const { isFilterDatedMenuShow } = useContext(MainContext)

  return (
    <div
      className={styles.container}
      style={{
        opacity: isFilterDatedMenuShow ? 1 : 0,
        pointerEvents: isFilterDatedMenuShow ? 'auto' : 'none'
      }}
    >
      <ul>
        <li>Next 3 Days</li>
        <li>Next 10 Days</li>
        <li>Next 30 Days</li>
      </ul>
    </div>
  )
}
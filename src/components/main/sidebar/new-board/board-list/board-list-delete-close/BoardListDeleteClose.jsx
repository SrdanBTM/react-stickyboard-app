

import styles from './boardListDeleteClose.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'

export default function BoardListDeleteClose({ board }) {

  const BASE_URL = import.meta.env.BASE_URL
  

  return (
    <div
      className={styles.container}
    >
      <div className={styles.delete}>
        <img src={`${BASE_URL}images/icon-delete1.png`} alt="delete" />
      </div>

      <div className={styles.close}>
        <img src={`${BASE_URL}images/icon-close1.png`} alt="close" />
      </div>
    </div>
  )
}
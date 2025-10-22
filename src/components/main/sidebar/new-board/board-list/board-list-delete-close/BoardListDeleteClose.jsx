

import styles from './boardListDeleteClose.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'

export default function BoardListDeleteClose({ board }) {

  const isDeleteShowed = board.isDeleteShowed

  return (
    <div
      className={styles.container}
    >
      <span>Delete board</span>
    </div>
  )
}
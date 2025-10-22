

import styles from './boardListDeleteClose.module.css'
import Close from './board-list-close/BoardListClose.jsx'
import Delete from './board-list-delete/BoardListDelete.jsx'

export default function BoardListDeleteClose({ board }) {

  return (
    <div className={styles.container}>
      <Delete board={board} />
      <Close board={board} />
    </div>
  )
}
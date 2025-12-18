

import styles from './boardListDeleteClose.module.css'
import Close from './board-list-close/BoardListClose.jsx'
import Delete from './board-list-delete/BoardListDelete.jsx'

export default function BoardListDeleteClose({ mappedBoard }) {

  return (
    <div className={styles.container}>
      <Delete mappedBoard={mappedBoard} />
      <Close mappedBoard={mappedBoard} />
    </div>
  )
}
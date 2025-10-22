

import styles from './boardListDeleteClose.module.css'
import Close from './board-list-close/BoardListClose.jsx'

export default function BoardListDeleteClose({ board }) {

  const BASE_URL = import.meta.env.BASE_URL
  

  return (
    <div
      className={styles.container}
    >
      <div className={styles.delete}>
        <img src={`${BASE_URL}images/icon-delete1.png`} alt="delete" />
      </div>
      <Close board={board} />
      
    </div>
  )
}
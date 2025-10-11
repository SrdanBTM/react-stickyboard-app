

import styles from './newBoard.module.css'
import BoardsList from '../boards-list/BoardsList.jsx'

export default function NewBoard() {


  return (
    <div className={styles.container}>
      <div className={styles.newBoard}>

        <div className={styles.heading}>
          <p>Boards</p>
        </div>

        <BoardsList />

        <div className={styles.createNewBoard}>
          <p>+ Create New Border</p>
        </div>
      </div>

    </div>
  )
}
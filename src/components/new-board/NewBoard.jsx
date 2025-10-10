

import styles from './newBoard.module.css'

export default function NewBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.newBoard}>

        <div className={styles.heading}>
          <p>Boards</p>
        </div>

        <div className={styles.boardsList}>
          <p>Development</p>
          <p>Zdravlje</p>
          <p>Razno</p>
        </div>

        <div className={styles.createNewBoard}>
          <p>+ Create New Border</p>
        </div>
      </div>
      
    </div>
  )
}


import styles from './newBoard.module.css'
import BoardsList from './boards-list/BoardsList.jsx'
import CreateNewBoard from './create-new-board/CreateNewBoard.jsx'

export default function NewBoard() {


  return (
    <div className={styles.container}>
      <div className={styles.newBoard}>

        <div className={styles.heading}>
          <p>Boards</p>
        </div>

        <BoardsList />
        <CreateNewBoard />
        
      </div>

    </div>
  )
}


import styles from './newBoard.module.css'
import BoardList from './board-list/BoardList.jsx'
import CreateNewBoard from './create-new-board/CreateNewBoard.jsx'

export default function NewBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.newBoard}>

        <div className={styles.heading}>
          <span>Boards</span>
        </div>

        <BoardList />
        <CreateNewBoard />
        
      </div>

    </div>
  )
}


import styles from './board.module.css'
import BoardBody from './board-body/BoardBody.jsx'
import BoardHeader from './board-header/BoardHeader.jsx'


export default function Board() {
  return (
    <div className={styles.container}>
      <BoardHeader />
      <BoardBody />
    </div>
  )
}
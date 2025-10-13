
import { useContext } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'
import styles from './board.module.css'

export default function Board() {

  const { currentBoard } = useContext(MainContext)

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <p>{currentBoard && currentBoard.boardName}</p>
      </div>

      <div className={styles.board}>

      </div>
    </section>
  )
}
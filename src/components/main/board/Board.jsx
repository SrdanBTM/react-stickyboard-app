
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'
import styles from './board.module.css'


export default function Board() {

  const { currentBoardId, boards } = useContext(MainContext)

  const currentBoard = boards.find(board => board.boardId === currentBoardId)


  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <span>{currentBoard.boardName}</span>
      </div>

      <div className={styles.board}>
        {currentBoard.stickers.map((sticker, index) => {
          return (
            <div
              key={index}
              className={styles.sticker}
              style={{ backgroundColor: sticker.color }}
            >
              {index}
            </div>
          )
        })}
      </div>
    </section>
  )
}
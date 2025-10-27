
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'
import styles from './board.module.css'


export default function Board() {

  const { currentBoardId, boards, boardRef } = useContext(MainContext)
  let currentBoard = null

  if (boards.length > 0) {
    currentBoard = boards.find(board => board.boardId === currentBoardId)
  }


  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        {currentBoard
          && <span>{currentBoard.boardName}</span>
        }
      </div>

      <div
        className={styles.board}
        ref={boardRef}>
        {currentBoard
          && currentBoard.stickers.map((sticker, index) => {
            return (
              <div
                key={index}
                className={styles.sticker}
                style={{ 
                  backgroundColor: sticker.color,
                  top: sticker.positionY,
                  left: sticker.positionX
                }}
              >
                {index}
              </div>
            )
          })}
      </div>
    </section>
  )
}

import { useContext, useEffect } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'
import styles from './board.module.css'
import StickerOnBoard from './sticker-on-board/StickerOnBoard.jsx'


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
              <StickerOnBoard
                key={index}
                sticker={sticker}
                index={index}
              />
            )
          })}
      </div>
    </section>
  )
}
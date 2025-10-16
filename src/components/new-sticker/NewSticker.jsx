
import styles from './newSticker.module.css'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'

export default function NewSticker() {

  const { setBoards, currentBoard, stickerTemplate } = useContext(MainContext)



  function handleMouseDown() {
    const sticker = {
      ...stickerTemplate,
      boardName: currentBoard.boardName,
      color: 'var(--sticker-color1)'
    }

    setBoards(prev => {
      return (
        prev.map(board => {
          return (
            board.boardName === currentBoard.boardName
              ? { ...board, stickers:[...board.stickers, sticker] }
              : board
          )
        })
      )
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Stickers</p>
      </div>

      <div
        className={styles.newSticker}
        onMouseDown={handleMouseDown}
      >

      </div>
    </div>
  )
}
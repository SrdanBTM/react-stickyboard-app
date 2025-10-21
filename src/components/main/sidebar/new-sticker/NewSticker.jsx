
import styles from './newSticker.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'

export default function NewSticker() {

  const { boards, setBoards, currentBoardId, stickerTemplate } = useContext(MainContext)

  const currentBoard = boards.find(board => board.boardId === currentBoardId)


  function handleMouseDown() {
    const sticker = {
      ...stickerTemplate,
      boardName: currentBoard.boardName
    }

    setBoards(prev => {
      return (
        prev.map(board => {
          return (
            board.boardId === currentBoardId
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
        <span>Stickers</span>
      </div>

      <div
        className={styles.newSticker}
        onMouseDown={handleMouseDown}
      >

      </div>
    </div>
  )
}
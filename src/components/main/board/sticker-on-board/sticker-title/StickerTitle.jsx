

import styles from './stickerTitle.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'


export default function StickerTitle({ stickerId }) {

  const { setBoards, boards, currentBoardId } = useContext(MainContext)

  const currentBoard = boards.find(board => board.boardId === currentBoardId)
  const currentSticker = currentBoard.stickers.find(sticker => sticker.stickerId === stickerId)


  function handleChange(e) {
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? {
            ...board,
            stickers: board.stickers.map(sticker => {
              return (
                sticker.stickerId === stickerId
                  ? {
                    ...sticker,
                    title: e.target.value
                  }
                  : sticker
              )
            })
          }
          : board
      )
    }))
  }

  
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title..."
        value={currentSticker.title}
        onChange={handleChange}
      />
    </div>
  )
} 
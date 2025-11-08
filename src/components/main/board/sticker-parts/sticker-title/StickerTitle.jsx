

import styles from './stickerTitle.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'


export default function StickerTitle({ mappedSticker }) {

  const { setBoards, boards, currentBoardId } = useContext(MainContext)



  function handleChange(e) {
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? {
            ...board,
            stickers: board.stickers.map(sticker => {
              return (
                sticker.stickerId === mappedSticker.stickerId
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
        value={mappedSticker.title}
        onChange={handleChange}
      />
    </div>
  )
} 
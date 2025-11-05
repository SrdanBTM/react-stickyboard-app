

import styles from './stickerNote.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'

export default function StickerNote({ stickerId }) {

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
                    note: e.target.value
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
    <div
      className={styles.container}
    >
      <div className={styles.textarea}>
        <textarea
          placeholder='Note...'
          value={currentSticker.note}
          onChange={handleChange}
        >
        </textarea>
      </div>
    </div>
  )
}
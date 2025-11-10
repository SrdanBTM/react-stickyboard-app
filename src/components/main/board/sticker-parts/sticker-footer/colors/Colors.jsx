

import styles from './colors.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx';

export default function Colors({ mappedSticker }) {

  const { setBoards, currentBoardId } = useContext(MainContext)

  const colors = [
    'var(--sticker-color1)',
    'var(--sticker-color2)',
    'var(--sticker-color3)',
    'var(--sticker-color4)',
    'var(--sticker-color5)',
    'var(--sticker-color6)'
  ]


  function handleClick(e, color) {
    const currentSickerId = e.currentTarget.getAttribute('data-id')

    if (currentBoardId) {
      setBoards(prev => prev.map(board => {
        return (
          board.boardId === currentBoardId
            ? {
              ...board,
              stickers: board.stickers.map((sticker => {
                return (
                  sticker.stickerId === currentSickerId
                    ? { ...sticker, color: color }
                    : sticker
                )
              }))
            }
            : board
        )
      }))
    } else {
      setBoards(prev => prev.map(board => {
        const hasSticker = board.stickers.some(sticker => sticker.stickerId === currentSickerId)

        if (hasSticker) {
          return {
            ...board,
            stickers: board.stickers.map(sticker =>
              sticker.stickerId === currentSickerId
                ? { ...sticker, color: color }
                : sticker
            )
          }
        }

        return board
      }))
    }
  }


  return (
    <div className={styles.container}>
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className={styles.oneColor}
            style={{ backgroundColor: `${color}` }}
            onClick={(e) => handleClick(e, color)}
            data-id={mappedSticker.stickerId}
          >
          </div>
        )
      })}
    </div>

  )
}




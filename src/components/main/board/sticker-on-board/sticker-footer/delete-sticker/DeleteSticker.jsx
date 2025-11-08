

import styles from './deleteSticker.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function DeleteSticker({ stickerId }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { setBoards, currentBoardId, theme } = useContext(MainContext)


  function handleClick(e) {
    const currentStickerId = e.currentTarget.getAttribute('data-id')

    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? {
            ...board,
            stickers: board.stickers.filter(sticker => sticker.stickerId !== currentStickerId)
          }
          : board
      )
    }))
  }


  return (
    <div
      className={styles.container}
      data-id={stickerId}
      onClick={handleClick}
    >
      <img
        src={`${BASE_URL}${theme === 'lightTheme' ? 'images/icon-delete3.png' : 'images/icon-delete4.png'}`}
        alt="delete sticker" />
    </div>
  )
}



import styles from './boardStickersPanel.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import StickerOnBoardStickersPanel from './sticker-on-board-stickers-panel/StickerOnBoardStickersPanel.jsx'
import CheckedStickersPanel from '../checked-stickers-panel/CheckedStickersPanel.jsx'


export default function BoardStickersPanel() {

  const { boards, currentBoardId, boardRef } = useContext(MainContext)

  const currentBoard =
    boards.length > 0
      ? boards.find(board => board.boardId === currentBoardId)
      : null


  return (
    <div
      className={styles.container}
      ref={boardRef}
    >
      {currentBoard
        && currentBoard.stickers
          .filter(sticker => !sticker.checked)
          .map(sticker => {
            return (
              <StickerOnBoardStickersPanel
                key={sticker.stickerId}
                mappedSticker={sticker}
              />
            )
          })}

      <CheckedStickersPanel />
    </div>
  )
}
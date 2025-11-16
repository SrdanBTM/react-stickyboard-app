

import styles from './checkedStickers.module.css'
import StickerOnCheckedStickers from './sticker-on-checked-stickers/StickerOnCheckedStickers.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'


export default function CheckedStickers() {

  const { boards, currentBoardId } = useContext(MainContext)

  let currentBoard = null
  if (boards.length > 0) {
    currentBoard = boards.find(board => board.boardId === currentBoardId)
  }

  return (
    <div className={styles.container}>

      {currentBoard
        && currentBoard.stickers
          .filter(sticker => sticker.checked)
          .map((sticker, index) => {
            return (
              <StickerOnCheckedStickers
                key={sticker.stickerId}
                topPosition={20 + index * 40}
                mappedSticker={sticker}
              />
            )
          })}

    </div>
  )
}
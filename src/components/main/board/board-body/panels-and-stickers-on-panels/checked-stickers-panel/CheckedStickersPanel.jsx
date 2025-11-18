


import styles from './checkedStickersPanel.module.css'
import StickerOnCheckedStickersPanel from './sticker-on-checked-stickers-panel/StickerOnCheckedStickersPanel.jsx'
import { useContext, useState } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function CheckedStickersPanel() {

  const { boards, currentBoardId } = useContext(MainContext)
  const [randomUUID, setRandomUUID] = useState(crypto.randomUUID())

  let currentBoard = null
  if (boards.length > 0) {
    currentBoard = boards.find(board => board.boardId === currentBoardId)
  }


  return (
    <div
      className={styles.container}
    >
      {currentBoard
        && currentBoard.stickers
          .filter(sticker => sticker.checked)
          .sort((sticker1, sticker2) => sticker1.checkedOrder - sticker2.checkedOrder)
          .map((sticker, index) => {
            return (
              <StickerOnCheckedStickersPanel
                key={sticker.stickerId + randomUUID}
                topPosition={20 + index * 40}
                mappedSticker={sticker}
                setRandomUUID={setRandomUUID}
              />
            )
          })}

    </div>
  )
}
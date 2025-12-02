


import styles from './checkedStickersPanel.module.css'
import StickerOnCheckedStickersPanel from './sticker-on-checked-stickers-panel/StickerOnCheckedStickersPanel.jsx'
import CheckedStickersPanelHoverTitle from './checked-stickers-panel-hover-title/CheckedStickersPanelHoverTitle.jsx'
import { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function CheckedStickersPanel() {

  const { boards, currentBoardId, isCheckedStickersPanelShow } = useContext(MainContext)
  const [randomUUID, setRandomUUID] = useState(crypto.randomUUID())
  const [isHoverTitleShow, setIsHoverTitleShow] = useState(true)
  const [isCheckedStickersPanelHover, setIsCheckedStickersPanelHover] = useState(false)


  let currentBoard = null
  if (boards.length > 0) {
    currentBoard = boards.find(board => board.boardId === currentBoardId)
  }

  const filteredAndSortedCheckedStickers =
    currentBoard && currentBoard.stickers
      .filter(sticker => sticker.checked)
      .sort((sticker1, sticker2) => sticker1.checkedOrder - sticker2.checkedOrder)


  useEffect(() => {
    setIsCheckedStickersPanelHover(false)
    setTimeout(() => {
      setIsHoverTitleShow(true)
    }, 300)
  }, [filteredAndSortedCheckedStickers.length])


  function handleMouseOver() {
    setIsCheckedStickersPanelHover(true)
    setIsHoverTitleShow(false)
  }


  function handleMouseLeave() {
    setIsCheckedStickersPanelHover(false)
    setTimeout(() => {
      setIsHoverTitleShow(true)
    }, 300)
  }


  return (
    <div
      className={styles.container}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{
        right: isCheckedStickersPanelShow || isCheckedStickersPanelHover ? '0' : '-200px'
      }}
    >
      {filteredAndSortedCheckedStickers.map((sticker, index) => {
        return (
          <StickerOnCheckedStickersPanel
            key={sticker.stickerId + randomUUID}
            topPosition={20 + index * 40}
            mappedSticker={sticker}
            setRandomUUID={setRandomUUID}
          />
        )
      })}

      {!isCheckedStickersPanelShow && isHoverTitleShow && <CheckedStickersPanelHoverTitle />}

    </div>
  )
}
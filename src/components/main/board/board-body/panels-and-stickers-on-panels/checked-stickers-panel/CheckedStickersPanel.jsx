


import styles from './checkedStickersPanel.module.css'
import CheckedStickersPanelCheckedStickers from './checked-stickers-panel-checked-stickers/CheckedStickersPanelCheckedStickers.jsx'
import CheckedStickersPanelHoverTitle from './checked-stickers-panel-hover-title/CheckedStickersPanelHoverTitle.jsx'
import CheckedStickersPanelHeader from './checked-stickers-panel-header/CheckedStickersPanelHeader.jsx'
import CheckedStickersPanelMessage from './checked-stickers-panel-message/CheckedStickersPanelMessage.jsx'
import { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function CheckedStickersPanel() {

  const { boards, currentBoardId, isCheckedStickersPanelShow } = useContext(MainContext)
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
      <CheckedStickersPanelHeader />
      
      {currentBoard.isThereCheckedSticker
        ? <CheckedStickersPanelCheckedStickers filteredAndSortedCheckedStickers={filteredAndSortedCheckedStickers} />
        : <CheckedStickersPanelMessage />}

      {!isCheckedStickersPanelShow && isHoverTitleShow && <CheckedStickersPanelHoverTitle />}

    </div>
  )
}
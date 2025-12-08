

import styles from './checkedPanelsBase.module.css'
import CheckedStickersPanelCheckedStickers from './checked-stickers-panel-checked-stickers/CheckedStickersPanelCheckedStickers.js'
import CheckedStickersPanelHoverTitle from './checked-stickers-panel-hover-title/CheckedStickersPanelHoverTitle.js'
import CheckedStickersPanelHeader from './checked-stickers-panel-header/CheckedStickersPanelHeader.js'
import CheckedStickersPanelMessage from './checked-stickers-panel-message/CheckedStickersPanelMessage.js'
import { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'


export default function CheckedBoardPanel() {

  const { updateBoard, boards, setBoards, currentBoardId, isCheckedStickersPanelShow } = useContext(MainContext)
  const [isHoverTitleShow, setIsHoverTitleShow] = useState(true)
  const [isCheckedStickersPanelHover, setIsCheckedStickersPanelHover] = useState(false)
  const [randomUUID, setRandomUUID] = useState(crypto.randomUUID())


  let currentBoard = null
  if (boards.length > 0) {
    currentBoard = boards.find(board => board.boardId === currentBoardId)
  }


  const isCheckedStickersInCurrentBoard = currentBoard
    ? currentBoard.stickers.some(sticker => sticker.checked)
    : false


  const filteredAndSortedCheckedStickers = currentBoard
    ? currentBoard.stickers
      .filter(sticker => sticker.checked)
      .sort((a, b) => a.checkedOrder - b.checkedOrder)
    : []



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


  useEffect(() => {
    if (isCheckedStickersInCurrentBoard) {
      const propertyToUpdate = { key: 'isThereCheckedSticker', value: true }
      updateBoard(setBoards, currentBoardId, propertyToUpdate)
    } else {
      const propertyToUpdate = { key: 'isThereCheckedSticker', value: false }
      updateBoard(setBoards, currentBoardId, propertyToUpdate)
    }
  }, [isCheckedStickersInCurrentBoard])


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

      {currentBoardId && currentBoard.isThereCheckedSticker
        ? <CheckedStickersPanelCheckedStickers filteredAndSortedCheckedStickers={filteredAndSortedCheckedStickers} />
        : <CheckedStickersPanelMessage />}

      <CheckedStickersPanelHoverTitle
        isHoverTitleShow={isHoverTitleShow}
        isCheckedStickersPanelShow={isCheckedStickersPanelShow}
      />

    </div>
  )
}
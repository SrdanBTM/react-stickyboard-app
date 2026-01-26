

import styles from './checkedSticker.module.css'
import CheckedStickerTitle from '../checked-sticker-parts/checked-sticker-title/CheckedStickerTitle.jsx'
import CheckedStickerNote from '../checked-sticker-parts/checked-sticker-note/CheckedStickerNote.jsx'
import CheckedStickerCheck from '../checked-sticker-parts/checked-sticker-check/CheckedStickerCheck.jsx'
import { useState, useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { updateBoard } from '../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'
import CheckedStickerDateTime from '../checked-sticker-parts/checked-sticker-date-time/CheckedStickerDateTime.jsx'


export default function CheckedPanelSticker({ topPosition, mappedSticker, setRandomUUID }) {

  const { boardRef, boards, setBoards, currentBoardId, isBoardChanging } = useContext(MainContext)
  const stickerRef = useRef()
  const [isDragged, setIsDragged] = useState(false)


  function handleDragStart() {
    setIsDragged(true)
  }


  function handleDragEnd() {
    setIsDragged(false)

    const stickerPosition = stickerRef.current.getBoundingClientRect()
    const boardPosition = boardRef.current.getBoundingClientRect()

    const stickerPositionInBoardLeft = stickerPosition.left - boardPosition.left
    const stickerPositionInBoardTop = stickerPosition.top - boardPosition.top
    const stickerPositionInBoardRight = boardPosition.right - stickerPosition.right
    const stickerPositionInBoardBottom = boardPosition.bottom - stickerPosition.bottom

    if (stickerPositionInBoardLeft >= 0
      && stickerPositionInBoardTop >= 0
      && stickerPositionInBoardRight >= 0
      && stickerPositionInBoardBottom >= 0) {

      const currentBoard = boards.find(board => board.boardId === currentBoardId)
      const newValueZIndexCounter = currentBoard.zIndexCounter + 1
      const propertyToUpdate0 = { key: 'zIndexCounter', value: newValueZIndexCounter }
      updateBoard(setBoards, currentBoardId, propertyToUpdate0)

      const currentStickerId = mappedSticker.stickerId
      const propertyToUpdate1 = { key: 'checked', value: false }
      const propertyToUpdate2 = { key: 'positionX', value: stickerPositionInBoardLeft }
      const propertyToUpdate3 = { key: 'positionY', value: stickerPositionInBoardTop }
      const propertyToUpdate4 = { key: 'checkedOrder', value: null }
      const propertyToUpdate5 = { key: 'zIndex', value: newValueZIndexCounter }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate5)

    } else {
      setRandomUUID(crypto.randomUUID())
    }

  }


  return (
    <motion.div
      className={styles.container}
      style={{
        top: topPosition,
        backgroundColor: mappedSticker.color
      }}
      initial={{
        opacity: 0
      }}
      animate={{
        width: isDragged ? '250px' : '',
        height: isDragged ? '250px' : '',
        opacity: 1
      }}
      transition={{
        duration: isBoardChanging ? 0 : 0.3,
        ease: 'linear'
      }}

      ref={stickerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      drag
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <CheckedStickerTitle mappedSticker={mappedSticker} />

      <CheckedStickerCheck />

      <CheckedStickerDateTime mappedSticker={mappedSticker} />

      <CheckedStickerNote mappedSticker={mappedSticker} />

    </motion.div>
  )
}
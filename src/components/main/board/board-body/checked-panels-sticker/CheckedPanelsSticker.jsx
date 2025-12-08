

import styles from './checkedPanelsSticker.module.css'
import CheckedStickerTitle from '../checked-panels-sticker-parts/checked-sticker-title/CheckedStickerTitle.jsx'
import CheckedStickerNote from '../checked-panels-sticker-parts/checked-sticker-note/CheckedStickerNote.jsx'
import CheckedStickerCheck from '../checked-panels-sticker-parts/checked-sticker-check/CheckedStickerCheck.jsx'
import { useState, useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'


export default function CheckedPanelSticker({ topPosition, mappedSticker, setRandomUUID }) {

  const { boardRef, updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const stickerRef = useRef()
  const [isDragged, setIsDragged] = useState(false)


  function handleMouseDown() {
    setIsMouseDown(true)
  }


  function handleMouseUp() {
    setIsMouseDown(false)
  }


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
      const currentStickerId = mappedSticker.stickerId
      const propertyToUpdate1 = { key: 'checked', value: false }
      const propertyToUpdate2 = { key: 'positionX', value: stickerPositionInBoardLeft }
      const propertyToUpdate3 = { key: 'positionY', value: stickerPositionInBoardTop }
      const propertyToUpdate4 = { key: 'checkedOrder', value: null }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)

    } else {
      setRandomUUID(crypto.randomUUID())
    }

  }


  return (
    <motion.div
      className={styles.container}
      style={{
        top: topPosition,
        backgroundColor: mappedSticker.color,
        zIndex: isMouseDown ? 1 : 0
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
        duration: 0.2,
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
      <CheckedStickerTitle mappedSticker={mappedSticker} isDragged={isDragged} />
      <CheckedStickerCheck />
      <CheckedStickerNote mappedSticker={mappedSticker} isDragged={isDragged} />
    </motion.div>
  )
}
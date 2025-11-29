
import styles from './stickerOnBoardStickersPanel.module.css'
import { motion, useDragControls } from 'framer-motion'
import { useContext, useRef, useState, useEffect } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerPin from '../../../sticker-parts/board-sticker-parts/board-sticker-pin/BoardStickerPin.jsx'
import BoardStickerHeader from '../../../sticker-parts/board-sticker-parts/board-sticker-header/BoardStickerHeader.jsx'
import BoardStickerNote from '../../../sticker-parts/board-sticker-parts/board-sticker-note/BoardStickerNote.jsx'
import BoardStickerFooter from '../../../sticker-parts/board-sticker-parts/board-sticker-footer/BoardStickerFooter.jsx'
import BoardStickerDateTime from '../../../sticker-parts/board-sticker-parts/board-sticker-date-time/BoardStickerDateTime.jsx'
import BoardStickerAddDateTime from '../../../sticker-parts/board-sticker-parts/board-sticker-add-date-time/BoardStickerAddDateTime.jsx'
import BoardStickerDelete from '../../../sticker-parts/board-sticker-parts/board-sticker-delete/BoardStickerDelete.jsx'
import BoardStickerChangeColor from '../../../sticker-parts/board-sticker-parts/board-sticker-change-color/BoardStickerChangeColor.jsx'


export default function StickerOnBoard({ mappedSticker }) {

  const { boards, updateAllStickers, checkedStickerId, boardRef, setBoards, currentBoardId, updateSticker } = useContext(MainContext)
  const stickerRef = useRef()
  const [constraints, setConstraints] = useState()
  const dragControl = useDragControls()


  useEffect(() => {
    setConstraints(boardRef)
  }, [boardRef])


  function handleDragEnd() {
    const currentStickerId = mappedSticker.stickerId

    const stickerPosition = stickerRef.current.getBoundingClientRect()
    const boardPosition = boardRef.current.getBoundingClientRect()

    const stickerPositionLeft = stickerPosition.left - boardPosition.left
    const stickerPositionTop = stickerPosition.top - boardPosition.top

    const propertyToUpdate1 = { key: 'positionX', value: stickerPositionLeft }
    const propertyToUpdate2 = { key: 'positionY', value: stickerPositionTop }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
  }


  function handleMouseDown() {
    const propertyToUpdate1 = { key: 'zIndex', value: 0 }
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate1)
    const propertyToUpdate2 = { key: 'zIndex', value: 1 }
    const currentStickerId = mappedSticker.stickerId
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
  }


  return (
    <motion.div
      className={styles.container}
      drag
      dragListener={false}
      dragControls={dragControl}
      dragMomentum={false}
      dragConstraints={constraints}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      onMouseDown={handleMouseDown}
      ref={stickerRef}
      style={{
        backgroundColor: mappedSticker.color,
        y: mappedSticker.positionY,
        x: mappedSticker.positionX,
        zIndex: mappedSticker.zIndex
      }}
      animate={{
        scale: checkedStickerId === mappedSticker.stickerId ? 0 : 1
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
    >
      <BoardStickerPin dragControl={dragControl} />
      <BoardStickerHeader mappedSticker={mappedSticker} />
      {mappedSticker.date && mappedSticker.time && <BoardStickerDateTime mappedSticker={mappedSticker} />}
      <BoardStickerNote mappedSticker={mappedSticker} />
      <BoardStickerFooter mappedSticker={mappedSticker} />
      <BoardStickerAddDateTime mappedSticker={mappedSticker} />
      <BoardStickerChangeColor mappedSticker={mappedSticker} />
      <BoardStickerDelete mappedSticker={mappedSticker} />

    </motion.div>
  )
}
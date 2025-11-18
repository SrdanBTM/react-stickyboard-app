
import styles from './stickerOnBoardStickersPanel.module.css'
import { motion, useDragControls } from 'framer-motion'
import { useContext, useRef, useState, useEffect } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerPin from '../../../sticker-parts/board-sticker-parts/board-sticker-pin/BoardStickerPin.jsx'
import BoardStickerHeader from '../../../sticker-parts/board-sticker-parts/board-sticker-header/BoardStickerHeader.jsx'
import BoardStickerNote from '../../../sticker-parts/board-sticker-parts/board-sticker-note/BoardStickerNote.jsx'
import BoardStickerFooter from '../../../sticker-parts/board-sticker-parts/board-sticker-footer/BoardStickerFooter.jsx'


export default function StickerOnBoard({ mappedSticker }) {

  const { checkedStickerId, boardRef, setBoards, currentBoardId, updateSticker } = useContext(MainContext)
  const stickerRef = useRef()
  const [constraints, setConstraints] = useState()
  const dragControl = useDragControls()


  useEffect(() => {
    setConstraints(boardRef)
  }, [boardRef])


  function handleDragEnd() {
    const currentStickerId = stickerRef.current.getAttribute('data-id')
    const stickerPosition = stickerRef.current.getBoundingClientRect()
    const boardPosition = boardRef.current.getBoundingClientRect()

    const stickerPositionLeft = stickerPosition.left - boardPosition.left
    const stickerPositionTop = stickerPosition.top - boardPosition.top

    const propertyToUpdate1 = { key: 'positionX', value: stickerPositionLeft }
    const propertyToUpdate2 = { key: 'positionY', value: stickerPositionTop }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
  }


  return (
    <motion.div
      data-id={mappedSticker.stickerId}
      className={styles.container}
      drag
      dragListener={false}
      dragControls={dragControl}
      dragMomentum={false}
      dragConstraints={constraints}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      ref={stickerRef}
      style={{
        backgroundColor: mappedSticker.color,
        y: mappedSticker.positionY,
        x: mappedSticker.positionX
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
      <BoardStickerNote mappedSticker={mappedSticker} />
      <BoardStickerFooter mappedSticker={mappedSticker} />
    </motion.div>
  )
}
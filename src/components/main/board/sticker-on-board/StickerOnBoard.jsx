
import styles from './stickerOnBoard.module.css'
import { motion, useDragControls } from 'framer-motion'
import { useContext, useRef, useState, useEffect } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'
import StickerPin from '../sticker-parts/sticker-pin/StickerPin.jsx'
import StickerHeader from '../sticker-parts/sticker-header/StickerHeader.jsx'
import StickerNote from '../sticker-parts/sticker-note/StickerNote.jsx'
import StickerFooter from '../sticker-parts/sticker-footer/StickerFooter.jsx'


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
      <StickerPin dragControl={dragControl} />

      <StickerHeader mappedSticker={mappedSticker} />
      <StickerNote mappedSticker={mappedSticker} />
      <StickerFooter mappedSticker={mappedSticker} />
    </motion.div>
  )
}
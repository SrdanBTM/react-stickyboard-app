

import { motion, useDragControls } from 'framer-motion'
import { useContext, useRef } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import MainPanelsStickersBase from '../main-panels-stickers-base/MainPanelsStickersBase.jsx'
import { updateSticker } from '../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { updateAllStickers } from '../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function MainPanelStickerBoard({ mappedSticker }) {

  const { checkedStickerId, boardRef, setBoards, currentBoardId } = useContext(MainContext)
  const stickerRef = useRef()
  const dragControl = useDragControls()
  const currentStickerId = mappedSticker.stickerId


  function handleDragEnd() {
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
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
  }


  function handleMouseOver() {
    const propertyToUpdate = { key: 'isHover', value: true }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }

  function handleMouseLeave() {
    const propertyToUpdate = { key: 'isHover', value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  return (
    <motion.div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      drag
      dragListener={false}
      dragControls={dragControl}
      dragMomentum={false}
      dragConstraints={boardRef}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      onMouseDown={handleMouseDown}
      ref={stickerRef}
      style={{
        y: mappedSticker.positionY,
        x: mappedSticker.positionX,
        zIndex: mappedSticker.zIndex,
        position: 'absolute'
      }}
      animate={{
        scale: checkedStickerId === mappedSticker.stickerId ? 0 : 1
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
    >

      <MainPanelsStickersBase
        mappedSticker={mappedSticker}
        dragControl={dragControl}
      />

    </motion.div >

  )
}
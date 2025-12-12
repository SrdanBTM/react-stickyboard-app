

import { motion, useDragControls } from 'framer-motion'
import { useContext, useRef } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import MainPanelsStickersBase from '../main-panels-stickers-base/MainPanelsStickersBase.jsx'
import { updateSticker } from '../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function MainPanelStickerBoard({ mappedSticker }) {

  const { boardRef, setBoards, currentBoardId } = useContext(MainContext)
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


  return (
    <motion.div
      drag
      dragListener={false}
      dragControls={dragControl}
      dragMomentum={false}
      dragConstraints={boardRef}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      ref={stickerRef}
      style={{
        y: mappedSticker.positionY,
        x: mappedSticker.positionX,
        zIndex: mappedSticker.zIndex,
        position: 'absolute'
      }}
    >

      <MainPanelsStickersBase
        mappedSticker={mappedSticker}
        dragControl={dragControl}
      />

    </motion.div >

  )
}


import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import styles from './mainPanelsStickersBase.module.css'
import Pin from '../main-panels-sticker-parts/pin/Pin.jsx'
import Header from '../main-panels-sticker-parts/header/Header.jsx'
import Note from '../main-panels-sticker-parts/note/Note.jsx'
import BoardName from '../main-panels-sticker-parts/board-name/BoardName.jsx'
import Footer from '../main-panels-sticker-parts/footer/Footer.jsx'
import DateTime from '../main-panels-sticker-parts/date-time/DateTime.jsx'
import AddDateTimeModal from '../main-panels-sticker-parts/add-date-time-modal/AddDateTimeModal.jsx'
import DeleteStickerModal from '../main-panels-sticker-parts/delete-sticker-modal/DeleteStickerModal.jsx'
import ChangeColorModal from '../main-panels-sticker-parts/change-color-modal/ChangeColorModal.jsx'
import { updateSticker } from '../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { updateAllStickers } from '../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function MainPanelsStickersBase({ mappedSticker, dragControl }) {

  const { checkedStickerId, currentBoardPanel, setBoards, currentBoardId } = useContext(MainContext)
  const [isHover, setIsHover] = useState(false)
  const currentStickerId = mappedSticker.stickerId


  function handleMouseDown() {
    const propertyToUpdate1 = { key: 'zIndex', value: 0 }
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate1)
    const propertyToUpdate2 = { key: 'zIndex', value: 1 }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
  }


  function handleHoverStart() {
    setIsHover(true)
  }


  function handleHoverEnd() {
    setIsHover(false)
  }


  return (
    <motion.div
      className={`${styles.container} ${styles[currentBoardPanel]}`}
      style={{ backgroundColor: mappedSticker.color }}

      onMouseDown={handleMouseDown}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}

      animate={{
        scale: checkedStickerId === mappedSticker.stickerId ? 0 : 1
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
    >

      {currentBoardPanel === 'board'
        && <Pin dragControl={dragControl} mappedSticker={mappedSticker} />}

      <Header mappedSticker={mappedSticker} isHover={isHover} />

      {mappedSticker.isDateTimeValid
        && <DateTime mappedSticker={mappedSticker} />}

      <Note mappedSticker={mappedSticker} />

      {currentBoardPanel !== 'board'
        && <BoardName mappedSticker={mappedSticker} />}

      <Footer mappedSticker={mappedSticker} isHover={isHover} />

      {mappedSticker.isDeleteModalOpen
        && <DeleteStickerModal mappedSticker={mappedSticker} />}
      {mappedSticker.isAddDateTimeModalOpen
        && <AddDateTimeModal mappedSticker={mappedSticker} />}
      {mappedSticker.isChangeColorModalOpen
        && <ChangeColorModal mappedSticker={mappedSticker} />}

    </motion.div>

  )
}


import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import styles from './mainStickerBase.module.css'
import Pin from '../main-sticker-parts/pin/Pin.jsx'
import Header from '../main-sticker-parts/header/Header.jsx'
import Note from '../main-sticker-parts/note/Note.jsx'
import BoardName from '../main-sticker-parts/board-name/BoardName.jsx'
import Footer from '../main-sticker-parts/footer/Footer.jsx'
import DateTime from '../main-sticker-parts/date-time/DateTime.jsx'
import AddDateTimeModal from '../main-sticker-parts/modals/AddDateTimeModal.jsx'
import DeleteStickerModal from '../main-sticker-parts/modals/DeleteStickerModal.jsx'
import ChangeColorModal from '../main-sticker-parts/modals/ChangeColorModal.jsx'


export default function MainStickerBase({ mappedSticker, dragControl }) {

  const { currentBoardPanel, isBoardChanging } = useContext(MainContext)
  const [isHover, setIsHover] = useState(false)


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

      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}

      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: isBoardChanging ? 1 : 0 }}
      transition={{ duration: isBoardChanging ? 0 : 0.3, ease: 'easeOut' }}
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
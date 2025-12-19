

import styles from './palette.module.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { closeCurrentStickerModal } from '../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'


export default function Palette({ mappedSticker }) {

  const { setBoards, currentBoardId } = useContext(MainContext)

  const colors = [
    'var(--sticker-color1)',
    'var(--sticker-color2)',
    'var(--sticker-color3)',
    'var(--sticker-color4)',
    'var(--sticker-color5)',
    'var(--sticker-color6)'
  ]


  function handleClick(e, color) {
    const currentStickerId = e.currentTarget.getAttribute('data-id')
    const propertyToUpdate = { key: 'color', value: color }
    const currentModal = 'isChangeColorModalOpen'
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
    closeCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal)
  }




  return (
    <motion.div
      className={styles.container}
    >
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className={styles.oneColor}
            style={{ backgroundColor: `${color}` }}
            onClick={(e) => handleClick(e, color)}
            data-id={mappedSticker.stickerId}
          >
          </div>
        )
      })}
    </motion.div>

  )
}




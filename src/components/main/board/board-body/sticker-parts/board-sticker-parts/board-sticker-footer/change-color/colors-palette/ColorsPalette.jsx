

import styles from './colorsPalette.module.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx';


export default function Colors({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)

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
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
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




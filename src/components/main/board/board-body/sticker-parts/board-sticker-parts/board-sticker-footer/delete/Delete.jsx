

import styles from './delete.module.css'
import DeleteIcon from './delete-icon/DeleteIcon.jsx'
import DeleteButton from './delete-button/DeleteButton.jsx'
import { motion } from 'framer-motion'
import { useState, useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Delete({ mappedSticker }) {

  const { } = useContext(MainContext)
  const [isMouseOver, setIsMouseOver] = useState(false)


  function handleMouseOver() {
    setIsMouseOver(true)
  }


  function handleMouseOut() {
    setIsMouseOver(false)
  }


  return (
    <motion.div
      className={styles.container}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        transform: isMouseOver ? 'translateX(0px)' : 'translateX(-210px)',
        zIndex: isMouseOver ? '1' : '0',
      }}
    >
      <DeleteButton mappedSticker={mappedSticker} />
      <DeleteIcon />
    </motion.div>
  )
}
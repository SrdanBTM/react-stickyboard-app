



import styles from './deleteButton.module.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Delete({ mappedSticker }) {


  const BASE_URL = import.meta.env.BASE_URL
  const { deleteSticker, setBoards, currentBoardId, theme } = useContext(MainContext)


  function handleClick(e) {
    const currentStickerId = e.currentTarget.getAttribute('data-id')
    deleteSticker(setBoards, currentBoardId, currentStickerId)
  }


  return (
    <motion.div
      className={`${styles.container}`}
      data-id={mappedSticker.stickerId}
      onClick={handleClick}
    >
      <span>DELETE STICKER</span>
    </motion.div>
  )
}
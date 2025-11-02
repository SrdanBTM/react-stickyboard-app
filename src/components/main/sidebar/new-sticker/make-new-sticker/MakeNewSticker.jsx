

import styles from './makeNewSticker.module.css'
import { useContext, useRef, useState } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import { motion } from 'framer-motion'


export default function MakeNewSticker() {

  const [key, setKey] = useState(0)
  const { boardRef, setBoards, stickerTemplate, currentBoardId } = useContext(MainContext)
  const stickerRef = useRef()


  function handleDragEnd() {
    const stickerPosition = stickerRef.current.getBoundingClientRect()
    const boardPosition = boardRef.current.getBoundingClientRect()

    const stickerPositionInBoardLeft = stickerPosition.left - boardPosition.left
    const stickerPositionInBoardTop = stickerPosition.top - boardPosition.top
    const stickerPositionInBoardRight = boardPosition.right - stickerPosition.right
    const stickerPositionInBoardBottom = boardPosition.bottom - stickerPosition.bottom


    let isStickerInBoard = false
    if (stickerPositionInBoardLeft >= 0 && stickerPositionInBoardTop >= 0 
      && stickerPositionInBoardRight >= 0 && stickerPositionInBoardBottom >= 0 ) {
        isStickerInBoard = true
      }
      

    if (isStickerInBoard) {
      const stickerToAdd = {
        ...stickerTemplate,
        stickerId: crypto.randomUUID(),
        positionX: stickerPositionInBoardLeft,
        positionY: stickerPositionInBoardTop
      }

      setBoards(prev => prev.map(board => {
        return (
          board.boardId === currentBoardId
            ? { ...board, stickers: [...board.stickers, stickerToAdd] }
            : board
        )
      }))
    }

    
    setKey(prev => prev + 1)
  }


  return (
    <motion.div
      key={key}
      className={styles.container}
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      ref={stickerRef}
    >
    </motion.div>
  )
}
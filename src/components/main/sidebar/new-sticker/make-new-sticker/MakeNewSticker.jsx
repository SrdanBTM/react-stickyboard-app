

import styles from './makeNewSticker.module.css'
import { useContext, useRef, useState, useEffect } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../../../contexts/AppModalsContext.jsx'
import { motion } from 'framer-motion'
import { addSticker } from '../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { stickerTemplate } from '../../../../../templates/Templates.jsx'


export default function MakeNewSticker() {

  const [key, setKey] = useState(0)
  const { setOpenedAppModal } = useContext(AppModalsContext)
  const { boards, boardRef, setBoards, currentBoardId, currentBoardPanel } = useContext(MainContext)
  const stickerRef = useRef()
  const [isStickerDragged, setIsStickerDragged] = useState(false)


  function handleDragEnd() {
    setIsStickerDragged(false)

    const stickerPosition = stickerRef.current.getBoundingClientRect()
    const boardPosition = boardRef.current.getBoundingClientRect()

    const currentBoard = boards.find(board => board.boardId === currentBoardId)

    const stickerPositionInBoardLeft = stickerPosition.left - boardPosition.left
    const stickerPositionInBoardTop = stickerPosition.top - boardPosition.top
    const stickerPositionInBoardRight = boardPosition.right - stickerPosition.right
    const stickerPositionInBoardBottom = boardPosition.bottom - stickerPosition.bottom

    if (stickerPositionInBoardLeft >= 0 && stickerPositionInBoardTop >= 0
      && stickerPositionInBoardRight >= 0 && stickerPositionInBoardBottom >= 0
      && currentBoardPanel === 'board') {
      const boardName = currentBoard.boardName
      const positionXValue = stickerPositionInBoardLeft
      const positionYValue = stickerPositionInBoardTop
      addSticker(setBoards, currentBoardId, stickerTemplate, boardName, positionXValue, positionYValue)
    } else if (currentBoardPanel !== 'board') {
      setOpenedAppModal('MessageNewStickerEnableOnlyOnBoardPanel')
    }

    setKey(prev => prev + 1)
  }


  function handleDragStart() {
    setIsStickerDragged(true)
  }


  return (
    <motion.div
      key={key}
      className={styles.container}
      style={{
        width: isStickerDragged ? '250px' : '',
        height: isStickerDragged ? '250px' : '',
        cursor: boardRef.current ? 'grab' : 'auto'
      }}
      drag={boardRef.current ? true : false}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      ref={stickerRef}
    >
    </motion.div>
  )
}


import styles from './makeNewSticker.module.css'
import { useContext, useRef, useState, useEffect } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../../../contexts/AppModalsContext.jsx'
import { motion } from 'framer-motion'
import { addSticker } from '../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { updateBoard } from '../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'
import { stickerTemplate } from '../../../../../templates/Templates.jsx'


export default function MakeNewSticker() {

  const [key, setKey] = useState(0)
  const { setOpenedAppModal } = useContext(AppModalsContext)
  const { boards, boardRef, setBoards, currentBoardId, setLastCreatedStickerId } = useContext(MainContext)
  const stickerRef = useRef()
  const [isStickerDragged, setIsStickerDragged] = useState(false)


  function handleDragEnd() {
    setIsStickerDragged(false)

    const stickerPosition = stickerRef.current.getBoundingClientRect()
    const boardPosition = boardRef.current.getBoundingClientRect()



    const stickerPositionInBoardLeft = stickerPosition.left - boardPosition.left
    const stickerPositionInBoardTop = stickerPosition.top - boardPosition.top
    const stickerPositionInBoardRight = boardPosition.right - stickerPosition.right
    const stickerPositionInBoardBottom = boardPosition.bottom - stickerPosition.bottom

    if (stickerPositionInBoardLeft >= 0
      && stickerPositionInBoardTop >= 0
      && stickerPositionInBoardRight >= 0
      && stickerPositionInBoardBottom >= 0
      && currentBoardId !== null) {

      const currentBoard = boards.find(board => board.boardId === currentBoardId)
      const newValueZIndexCounter = currentBoard.zIndexCounter + 1
      const boardName = currentBoard.boardName
      const stickerId = crypto.randomUUID()
      const positionXValue = stickerPositionInBoardLeft
      const positionYValue = stickerPositionInBoardTop
      addSticker(setBoards, currentBoardId, stickerTemplate, boardName, stickerId, newValueZIndexCounter, positionXValue, positionYValue)
      setLastCreatedStickerId(stickerId)
      updateBoard(setBoards, currentBoardId, { key: 'zIndexCounter', value: newValueZIndexCounter })

    } else if (currentBoardId === null) {
      setOpenedAppModal('MessageNewStickerEnableOnlyOnBoardPanelModal')
    }

    setKey(prev => prev + 1)
  }


  function handleDragStart() {
    setIsStickerDragged(true)
  }


  useEffect(() => {
    console.log(boards);

  }, [boards])


  return (
    <motion.div
      key={key}
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut'
      }}
      style={{
        width: isStickerDragged ? '250px' : '',
        height: isStickerDragged ? '250px' : '',
        cursor: boardRef.current ? 'grab' : 'auto',
        zIndex: 1000000
      }}
      drag={boardRef.current ? true : false}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      ref={stickerRef}
      title='Drag to create a new sticker'
    >
    </motion.div>
  )
}

import styles from './stickerOnBoard.module.css'
import { motion, useDragControls } from 'framer-motion'
import { useContext, useRef, useState, useEffect } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'
import StickerPin from '../sticker-parts/sticker-pin/StickerPin.jsx'
import StickerTitle from '../sticker-parts/sticker-title/StickerTitle.jsx'
import StickerNote from '../sticker-parts/sticker-note/StickerNote.jsx'
import StickerFooter from '../sticker-parts/sticker-footer/StickerFooter.jsx'


export default function StickerOnBoard({ mappedSticker }) {

  const { boardRef, setBoards, currentBoardId } = useContext(MainContext)
  const stickerRef = useRef()
  const [constraints, setConstraints] = useState()
  const dragControl = useDragControls()


  useEffect(() => {
    setConstraints(boardRef)
  }, [boardRef])

  

  function handleDragEnd() {
    const dataId = stickerRef.current.getAttribute('data-id')
    const stickerPosition = stickerRef.current.getBoundingClientRect()
    const boardPosition = boardRef.current.getBoundingClientRect()

    const stickerPositionLeft = stickerPosition.left - boardPosition.left
    const stickerPositionTop = stickerPosition.top - boardPosition.top

    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? {
            ...board,
            stickers:
              board.stickers.map(sticker => {
                return (
                  sticker.stickerId === dataId
                    ? {
                      ...sticker,
                      positionX: stickerPositionLeft,
                      positionY: stickerPositionTop
                    }
                    : sticker
                )
              })
          }
          : board
      )
    })
    )
  }


  return (
    <motion.div
      data-id={mappedSticker.stickerId}
      className={styles.container}
      drag
      dragListener={false}
      dragControls={dragControl}
      dragMomentum={false}
      dragConstraints={constraints}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      ref={stickerRef}
      style={{
        backgroundColor: mappedSticker.color,
        y: mappedSticker.positionY,
        x: mappedSticker.positionX
      }}
    >
      <StickerPin dragControl={dragControl} />

      <StickerTitle mappedSticker={mappedSticker} />
      <StickerNote mappedSticker={mappedSticker} />
      <StickerFooter mappedSticker={mappedSticker} />
    </motion.div>
  )
}
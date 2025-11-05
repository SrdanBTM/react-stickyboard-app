
import styles from './stickerOnBoard.module.css'
import { motion } from 'framer-motion'
import { useContext, useRef, useState, useEffect } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'
import StickerPin from './sticker-pin/StickerPin.jsx'
import StickerTitle from './sticker-title/StickerTitle.jsx'
import StickerNote from './sticker-note/StickerNote.jsx'
import ColorsPalette from './colors-palette/ColorsPalette.jsx'


export default function StickerOnBoard({ sticker, index }) {

  const { boardRef, boards, setBoards, currentBoardId } = useContext(MainContext)
  const stickerRef = useRef()
  const [constraints, setConstraints] = useState()


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
      data-id={sticker.stickerId}
      className={styles.container}
      drag
      dragMomentum={false}
      dragConstraints={constraints}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      ref={stickerRef}
      style={{
        backgroundColor: sticker.color,
        y: sticker.positionY,
        x: sticker.positionX
      }}
    >
      <StickerPin />

      <StickerTitle stickerId={sticker.stickerId} />
      <StickerNote stickerId={sticker.stickerId} />
      <ColorsPalette stickerId={sticker.stickerId} />
    </motion.div>
  )
}
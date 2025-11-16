

import styles from './stickerOnCheckedStickers.module.css'
import CheckedStickerTitle from './checked-sticker-title/CheckedStickerTitle.jsx'
import CheckedStickerNote from './checked-sticker-note/CheckedStickerNote.jsx'
import { useState } from 'react'

export default function StickerOnCheckedStickers({ topPosition, mappedSticker }) {

  const [ isMouseDown, setIsMouseDown ] = useState(false)


  function handleMouseDown() {
    setIsMouseDown(true)
  }

  function handleMouseUp() {
    setIsMouseDown(false)
  }


  return (
    <div
      className={styles.container}
      style={{
        top: topPosition,
        backgroundColor: mappedSticker.color,
        zIndex: isMouseDown ? 1 : 0
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <CheckedStickerTitle mappedSticker={mappedSticker} />
      <CheckedStickerNote mappedSticker={mappedSticker} />
    </div>
  )
}
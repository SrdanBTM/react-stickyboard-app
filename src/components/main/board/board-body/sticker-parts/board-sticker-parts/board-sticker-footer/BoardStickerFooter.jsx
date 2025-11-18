

import styles from './stickerFooter.module.css'
import Colors from './colors/Colors.jsx'
import Dots from './dots/Dots.jsx'
import BoardName from './board-name/BoardName.jsx'
import DeleteSticker from './delete-sticker/DeleteSticker.jsx'
import { useState } from 'react'


export default function StickerFooter({ mappedSticker }) {

  const [isMouseOver, setIsMouseOver] = useState(false)

  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseOut() {
    setIsMouseOver(false)
  }


  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ transform: isMouseOver ? 'translateX(-200px)' : 'translateX(0px)' }}
      >

        <BoardName mappedSticker={mappedSticker} />

        {isMouseOver
          ? <DeleteSticker mappedSticker={mappedSticker} />
          : <Dots />}

        <Colors mappedSticker={mappedSticker} />

      </div>
    </div>
  )
}
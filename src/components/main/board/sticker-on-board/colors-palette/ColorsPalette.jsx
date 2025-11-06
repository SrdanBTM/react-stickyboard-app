

import styles from './colorsPalette.module.css'
import Colors from './colors/Colors.jsx'
import Dots from './dots/Dots.jsx'
import DeleteSticker from './delete-sticker/DeleteSticker.jsx'
import { useState } from 'react'


export default function ColorsPalette({ stickerId }) {

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
        style={{ transform: isMouseOver ? 'translateX(0px)' : 'translateX(210px)' }}
      >

        {isMouseOver
          ? <DeleteSticker stickerId={stickerId} />
          : <Dots />}

        <Colors stickerId={stickerId} />

      </div>
    </div>
  )
}
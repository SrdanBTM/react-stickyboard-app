
import styles from './stickerPin.module.css'
import { useState } from 'react'

export default function StickerPin() {

  const BASE_URL = import.meta.env.BASE_URL
  const [isUnpined, setIsUnpined] = useState(false)

  function handleMouseDown() {
    setIsUnpined(true)
  }

  function handleMouseUp() {
    setIsUnpined(false)
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={styles.container}
      style={{ transform: isUnpined ? 'translateY(-5px)' : '' }}
    >
      <div className={styles.image}>
        <img
          src={isUnpined
            ? `${BASE_URL}images/icon-pin2.png`
            : `${BASE_URL}images/icon-pin1.png`}
          alt="pin icon" />
      </div>
    </div>
  )
}
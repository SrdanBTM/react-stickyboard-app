

import styles from './pin.module.css'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../../../../../contexts/ThemeContext.jsx'
import { IconPin } from '../../../../../../icons/Icons.jsx'


export default function Pin({ dragControl, mappedSticker }) {

  const BASE_URL = import.meta.env.BASE_URL
  const [isUnpined, setIsUnpined] = useState(false)
  const { theme } = useContext(ThemeContext)


  function handleMouseDown(e) {
    setIsUnpined(true)
    dragControl.start(e)
  }

  function handleMouseUp() {
    setIsUnpined(false)
  }



  return (
    <button
      className={`${styles.container} iconSticker iconStickerNormal`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      title='Drag to move sticker'
      style={{
        transform: isUnpined ? 'translateY(-2px) scale(1.1)' : ''
      }}
    >
      <IconPin color={mappedSticker.color} />
    </button>

  )
}
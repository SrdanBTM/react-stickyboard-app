

import styles from './pin.module.css'
import { useState } from 'react'
import { IconPin } from '../../../../../../icons/Icons.jsx'


export default function Pin({ dragControl, mappedSticker }) {

  const [isUnpined, setIsUnpined] = useState(false)


  function handleMouseDown(e) {
    setIsUnpined(true)
    dragControl.start(e)
  }

  function handleMouseUp() {
    setIsUnpined(false)
  }



  return (
    <button
      className={`${styles.container} iconStickerPin iconStickerPinHover`}
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
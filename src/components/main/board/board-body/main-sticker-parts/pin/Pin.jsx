

import styles from './pin.module.css'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../../../../../contexts/ThemeContext.jsx'
import { IconPin } from '../../../../../../icons/Icons.jsx'


export default function Pin({ dragControl }) {

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
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={styles.container}
      title='Drag to move sticker'
      style={{
        transform: isUnpined ? 'translateY(-5px)' : ''
      }}
    >
      <IconPin />
    </button>
  )
}



import styles from './changeColor.module.css'
import ColorsPaletteIcon from './colors-palette-icon/ColorsPaletteIcon.jsx'
import ColorsPalette from './colors-palette/ColorsPalette.jsx'
import { useState } from 'react'


export default function ChangeColor({ mappedSticker }) {

  const [isMouseOver, setIsMouseOver] = useState(false)

  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseOut() {
    setIsMouseOver(false)
  }


  return (
    <div
      className={styles.container}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ transform: isMouseOver ? 'translateX(0px)' : 'translateX(210px)' }}
    >
      <ColorsPaletteIcon />
      <ColorsPalette mappedSticker={mappedSticker} />
    </div>
  )
}
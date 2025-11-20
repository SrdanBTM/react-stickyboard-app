


import styles from './changeColor.module.css'
import ColorsPaletteIcon from './colors-palette-icon/ColorsPaletteIcon.jsx'
import ColorsPalette from './colors-palette/ColorsPalette.jsx'
import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function ChangeColor({ mappedSticker }) {

  const { } = useContext(MainContext)
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
      style={{
        transform: isMouseOver ? 'translateX(0px)' : 'translateX(210px)',
        zIndex: isMouseOver ? '1' : '0'
      }}
    >
      <ColorsPaletteIcon />
      <ColorsPalette mappedSticker={mappedSticker} />
    </div>
  )
}
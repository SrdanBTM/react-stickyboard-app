


import styles from './changeColor.module.css'
import ColorsPaletteIcon from './colors-palette-icon/ColorsPaletteIcon.jsx'
import ColorsPalette from './colors-palette/ColorsPalette.jsx'


export default function ChangeColor() {
  return (
    <div className={styles.container}>
      <ColorsPaletteIcon />
      <ColorsPalette />
    </div>
  )
}
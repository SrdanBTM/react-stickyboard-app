

import styles from './boardStickerChangeColor.module.css'
import ColorsPalette from './colors-palette/ColorsPalette.jsx'


export default function BoardStickerChangeColor({ mappedSticker }) {


  return (
    <div
      className={styles.container}
      style={{
        transform: mappedSticker.isChangeColorOpen? 'scale(1)' : 'scale(0)',
        transition: 'transform 0.3s ease',
        backgroundColor: mappedSticker.color
      }}
    >
      <div className={styles.content}>
        <ColorsPalette mappedSticker={mappedSticker} />
      </div>
    </div>
  )
}





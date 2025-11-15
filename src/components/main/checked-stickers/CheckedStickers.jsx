

import styles from './checkedStickers.module.css'
import StickerOnCheckedStickers from './sticker-on-checked-stickers/StickerOnCheckedStickers.jsx'


export default function CheckedStickers() {
  return (
    <div className={styles.container}>
      <StickerOnCheckedStickers />
    </div>
  )
}
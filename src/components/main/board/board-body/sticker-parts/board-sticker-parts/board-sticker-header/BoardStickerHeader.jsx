

import styles from './boardStickerHeader.module.css'
import StickerTitle from './sticker-title/StickerTitle.jsx'
import StickerCheck from './sticker-check/StickerCheck.jsx'


export default function StickerHeader({ mappedSticker }) {
  return (
    <div className={`
      ${styles.container} 
      ${mappedSticker.date && mappedSticker.time ? styles.dateTime : styles.noDateTime}
      `}>
      <StickerTitle mappedSticker={mappedSticker} />
      <StickerCheck mappedSticker={mappedSticker} />
    </div>
  )
} 
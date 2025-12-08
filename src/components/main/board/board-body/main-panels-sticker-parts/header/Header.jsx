

import styles from './header.module.css'
import StickerTitle from './title/Title.jsx'
import StickerCheck from './check/Check.jsx'


export default function Header({ mappedSticker }) {
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
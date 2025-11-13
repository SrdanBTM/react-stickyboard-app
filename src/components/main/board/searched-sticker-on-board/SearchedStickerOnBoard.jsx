


import styles from './searchedStickerOnBoard.module.css'
import { useRef} from 'react'
import StickerTitle from '../sticker-parts/sticker-title/StickerTitle.jsx'
import StickerNote from '../sticker-parts/sticker-note/StickerNote.jsx'
import StickerFooter from '../sticker-parts/sticker-footer/StickerFooter.jsx'


export default function SearchedStickerOnBoard({ mappedSticker }) {

  const stickerRef = useRef()

  return (
    <div
      data-id={mappedSticker.stickerId}
      className={styles.container}
      ref={stickerRef}
      style={{
        backgroundColor: mappedSticker.color
      }}
    >
      <StickerTitle mappedSticker={mappedSticker} />
      <StickerNote mappedSticker={mappedSticker} />
      <StickerFooter mappedSticker={mappedSticker} />
    </div>
  )
}
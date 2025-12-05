


import styles from './stickerOnFilteredStickersPanel.module.css'
import StickerHeader from '../../../sticker-parts/board-sticker-parts/board-sticker-header/BoardStickerHeader.jsx'
import StickerNote from '../../../sticker-parts/board-sticker-parts/board-sticker-note/BoardStickerNote.jsx'
import StickerFooter from '../../../sticker-parts/board-sticker-parts/board-sticker-footer/BoardStickerFooter.jsx'


export default function StickerOnFilteredStickersPanel({ mappedSticker }) {

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker.color
      }}
    >
      <StickerHeader mappedSticker={mappedSticker} />
      <StickerNote mappedSticker={mappedSticker} />
      <StickerFooter mappedSticker={mappedSticker} />
    </div>
  )
}
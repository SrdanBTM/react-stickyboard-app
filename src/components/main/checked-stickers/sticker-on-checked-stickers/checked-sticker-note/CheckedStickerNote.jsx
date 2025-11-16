

import styles from './checkedStickerNote.module.css'


export default function CheckedStickerNote({ mappedSticker }) {
  return (
    <div className={styles.container}>
      <span>{mappedSticker.note}</span>
    </div>
  )
}
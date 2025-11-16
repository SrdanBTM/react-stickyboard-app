


import styles from './checkedStickerTitle.module.css'


export default function CheckedStickerTitle({ mappedSticker }) {
  return (
    <div className={styles.container}>
      <span>{mappedSticker.title}</span>
    </div>
  )
}
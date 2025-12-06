

import styles from './boardStickerModalWrapper.module.css'


export default function BoardStickerModalWrapper({ children, mappedSticker }) {


  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker.color
      }}
    >
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
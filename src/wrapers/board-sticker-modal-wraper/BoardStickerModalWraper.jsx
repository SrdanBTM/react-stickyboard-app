

import styles from './boardStickerModalWraper.module.css'


export default function BoardStickerModalWraper({ children, mappedSticker }) {


  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker.color
      }}
    >
      {children}
    </div>
  )
}
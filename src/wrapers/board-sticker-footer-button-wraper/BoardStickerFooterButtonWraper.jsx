

import styles from './boardStickerFooterButtonWraper.module.css'


export default function BoardStickerFooterButtonWraper({ children }) {

  return (
    <div
      className={styles.container}
    >
      {children}
    </div>
  )
}
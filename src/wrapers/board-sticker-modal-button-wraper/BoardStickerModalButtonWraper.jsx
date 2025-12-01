

import styles from './boardStickerModalButtonWraper.module.css'


export default function BoardStickerModalButtonWraper({ children }) {


  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
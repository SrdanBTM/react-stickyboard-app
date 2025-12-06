

import styles from './boardStickerModalButtonWrapper.module.css'


export default function BoardStickerModalButtonWrapper({ children }) {


  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
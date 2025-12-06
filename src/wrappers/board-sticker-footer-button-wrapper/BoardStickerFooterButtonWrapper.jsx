

import styles from './boardStickerFooterButtonWrapper.module.css'


export default function BoardStickerFooterButtonWrapper({ children, currentModal, mappedSticker }) {

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker[currentModal] ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.35)'
      }}
    >
      {children}
    </div>
  )
}


import styles from './stickerOnPanelWrapper.module.css'


export default function StickerOnPanelWrapper({ mappedSticker, variant, children }) {

  return (
    <div
      className={`${styles.container} ${styles[variant]}`}
      style={{backgroundColor: mappedSticker.color}}
    >
      {children}
    </div>
  )
}
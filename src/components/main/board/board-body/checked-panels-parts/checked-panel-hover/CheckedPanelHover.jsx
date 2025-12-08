

import styles from './checkedPanelHover.module.css'


export default function CheckedPanelHover({ isHoverTitleShow, isCheckedStickersPanelShow }) {
  return (
    <div
      className={styles.container}
      style={{
        left: isHoverTitleShow && !isCheckedStickersPanelShow ? '-120px' : '-80px',
        opacity: isHoverTitleShow && !isCheckedStickersPanelShow ? 1 : 0,
      }}
    >
      <span>Show checked stickers</span>
    </div>
  )
}
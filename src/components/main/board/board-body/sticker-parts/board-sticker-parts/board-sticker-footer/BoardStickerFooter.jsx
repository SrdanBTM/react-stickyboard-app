

import styles from './boardStickerFooter.module.css'
import Buttons from './buttons/Buttons.jsx'
import BoardName from './board-name/BoardName.jsx'


export default function BoardStickerFooter({ mappedSticker }) {
  return (
    <div 
      className={styles.container} 
      style={{
        opacity: mappedSticker.isHover 
        || mappedSticker.isAddDateTimeModalOpen 
        || mappedSticker.isChangeColorModalOpen 
        || mappedSticker.isDeleteModalOpen 
        ? 1 : 0,
        backgroundColor: mappedSticker.color
      }}
      >
      {/* <BoardName mappedSticker={mappedSticker} /> */}
      <Buttons mappedSticker={mappedSticker} />
    </div>
  )
}
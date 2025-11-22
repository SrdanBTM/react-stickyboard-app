

import styles from './boardStickerFooter.module.css'
import ChangeColor from './change-color/ChangeColor.jsx'
import BoardName from './board-name/BoardName.jsx'
import Delete from './delete/Delete.jsx'
import AddDate from './add-date/AddDate.jsx'


export default function StickerFooter({ mappedSticker }) {
  return (
    <div className={styles.container}>
      {/* <BoardName mappedSticker={mappedSticker} /> */}
      <Delete mappedSticker={mappedSticker} />
      <AddDate mappedSticker={mappedSticker} />
      <ChangeColor mappedSticker={mappedSticker} />
    </div>
  )
}


import styles from './stickerFooter.module.css'
import ChangeColor from './change-color/ChangeColor.jsx'
import BoardName from './board-name/BoardName.jsx'
import DeleteSticker from './delete-sticker/DeleteSticker.jsx'


export default function StickerFooter({ mappedSticker }) {
  return (
    <div className={styles.container}>
      {/* <BoardName mappedSticker={mappedSticker} /> */}
      <ChangeColor mappedSticker={mappedSticker}/>
    </div>
  )
}
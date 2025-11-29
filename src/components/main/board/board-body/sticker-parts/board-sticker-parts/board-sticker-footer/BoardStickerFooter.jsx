

import styles from './boardStickerFooter.module.css'
import Buttons from './buttons/Buttons.jsx'
import BoardName from './board-name/BoardName.jsx'


export default function BoardStickerFooter({ mappedSticker }) {
  return (
    <div className={styles.container}>
      {/* <BoardName mappedSticker={mappedSticker} /> */}
      <Buttons mappedSticker={mappedSticker} />
    </div>
  )
}
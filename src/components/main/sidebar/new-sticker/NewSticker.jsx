

import styles from './newSticker.module.css'
import MakeNewSticker from './make-new-sticker/MakeNewSticker.jsx'


export default function NewSticker() {

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span>Stickers</span>
      </div>

      <div className={styles.stack}>
        <div className={styles.remainingStickers}></div>
        <MakeNewSticker />
      </div>
    </div>
  )
}
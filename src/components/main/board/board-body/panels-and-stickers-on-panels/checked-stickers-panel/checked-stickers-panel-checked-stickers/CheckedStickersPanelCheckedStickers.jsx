


import styles from './checkedStickersPanelCheckedStickers.module.css'
import StickerOnCheckedStickersPanel from '../sticker-on-checked-stickers-panel/StickerOnCheckedStickersPanel.jsx'
import { useState } from 'react'


export default function CheckedStickersPanelCheckedStickers({ filteredAndSortedCheckedStickers }) {

  const [randomUUID, setRandomUUID] = useState(crypto.randomUUID())


  return (
    <div className={styles.container}>
      {filteredAndSortedCheckedStickers.map((sticker, index) => {
        return (
          <StickerOnCheckedStickersPanel
            key={sticker.stickerId + randomUUID}
            topPosition={20 + index * 40}
            mappedSticker={sticker}
            setRandomUUID={setRandomUUID}
          />
        )
      })}
    </div>
  )
}
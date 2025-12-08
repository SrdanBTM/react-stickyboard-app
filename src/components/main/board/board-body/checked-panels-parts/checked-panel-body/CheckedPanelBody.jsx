


import styles from './checkedPanelBody.module.css'
import StickerOnCheckedStickersPanel from '../../checked-panels-sticker/CheckedPanelsSticker.jsx'
import { useState } from 'react'


export default function CheckedPanelBody({ filteredAndSortedCheckedStickers }) {

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
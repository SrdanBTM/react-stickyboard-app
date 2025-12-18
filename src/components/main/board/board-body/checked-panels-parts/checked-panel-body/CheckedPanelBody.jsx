


import styles from './checkedPanelBody.module.css'
import StickerOnCheckedStickersPanel from '../../checked-panels-sticker/CheckedPanelsSticker.jsx'
import { useState } from 'react'


export default function CheckedPanelBody({ stickersToShowOnCheckedPanel }) {

  const [randomUUID, setRandomUUID] = useState(crypto.randomUUID())


  return (
    <div className={`${styles.container} scroll`}>
      {stickersToShowOnCheckedPanel.map((sticker, index) => {
        return (
          <StickerOnCheckedStickersPanel
            key={sticker.stickerId + randomUUID}
            topPosition={20 + index * 55}
            mappedSticker={sticker}
            setRandomUUID={setRandomUUID}
          />
        )
      })}
    </div>
  )
}
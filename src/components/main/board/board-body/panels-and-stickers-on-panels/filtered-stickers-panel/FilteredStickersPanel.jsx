

import styles from './filteredStickersPanel.module.css'
import { useContext, useRef } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import StickerOnFilteredStickersPanel from './sticker-on-filtered-stickers-panel/StickerOnFilteredStickersPanel.jsx'


export default function FilteredStickersPanel() {

  const { boards } = useContext(MainContext)


  const stickersWithValidDateTime = boards.flatMap(board => board.stickers.filter(sticker => sticker.isDateTimeValid))


  return (
    <div
      className={styles.container}
    >
      {stickersWithValidDateTime.map(sticker => {
        return (
          <StickerOnFilteredStickersPanel
            key={sticker.stickerId}
            mappedSticker={sticker}
          />
        )
      })}
    </div>
  )
}



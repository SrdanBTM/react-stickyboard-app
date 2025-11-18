


import styles from './searchedStickersPanel.module.css'
import { useContext, useRef } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import StickerOnSearchedStickersPanel from './sticker-on-searched-stickerst-panel/StickerOnSearchedStickersPanel.jsx'


export default function SearchedStickersPanel() {

  const { searchValue, boards } = useContext(MainContext)


  const result =
    searchValue.length === 0
      ? []
      : boards.flatMap(board => board.stickers)
        .filter(sticker => !sticker.checked)
        .filter(sticker => sticker.title.toLowerCase().includes(searchValue.toLowerCase()))


  return (
    <div
      className={styles.container}
    >
      {result.map(sticker => {
        return (
          <StickerOnSearchedStickersPanel
            key={sticker.stickerId}
            mappedSticker={sticker}
          />
        )
      })}
    </div>
  )
}


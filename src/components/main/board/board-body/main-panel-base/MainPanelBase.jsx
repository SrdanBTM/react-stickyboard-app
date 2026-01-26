

import styles from './mainPanelBase.module.css'
import { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import MainStickerBoard from '../main-stickers/MainStickerBoard.jsx'
import MainStickerFilter from '../main-stickers/MainStickerFilter.jsx'
import MainStickerSearch from '../main-stickers/MainStickerSearch.jsx'


export default function MainPanelBase({ stickers }) {

  const { boardRef, currentBoardPanel } = useContext(MainContext)

  const stickerVariants = {
    board: MainStickerBoard,
    search: MainStickerFilter,
    filter: MainStickerSearch
  }

  const MainStickerVariant = stickerVariants[currentBoardPanel]


  return (
    <div
      className={`${styles.container} ${styles[currentBoardPanel]} scroll`}
      ref={boardRef}

    >
      <AnimatePresence>
        {stickers.map(sticker => (
          <MainStickerVariant
            key={sticker.stickerId}
            mappedSticker={sticker}
          />

        ))}
      </AnimatePresence>
    </div>
  )
}
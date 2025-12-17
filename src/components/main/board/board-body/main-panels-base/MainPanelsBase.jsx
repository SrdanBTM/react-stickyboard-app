

import styles from './mainPanelsBase.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import MainPanelStickerBoard from '../main-panels-stickers/MainPanelStickerBoard.jsx'
import MainPanelStickerFilter from '../main-panels-stickers/MainPanelStickerFilter.jsx'
import MainPanelStickerSearch from '../main-panels-stickers/MainPanelStickerSearch.jsx'


export default function MainPanelsBase({ stickers }) {

  const { boardRef, currentBoardPanel, isCheckedStickersPanelShow, selectedFilterButton } = useContext(MainContext)

  const stickerVariants = {
    board: MainPanelStickerBoard,
    search: MainPanelStickerFilter,
    filter: MainPanelStickerSearch
  }

  const MainPanelStickerVariant = stickerVariants[currentBoardPanel]


  return (
    <div
      className={`${styles.container} ${styles[currentBoardPanel]}`}
      ref={boardRef}
      style={{
        paddingRight: isCheckedStickersPanelShow && currentBoardPanel !== 'board' && selectedFilterButton !== 'datedNextDays' ? '200px' : ''
      }}

    >
      {stickers.map(sticker => (
        <MainPanelStickerVariant
          key={sticker.stickerId}
          mappedSticker={sticker}
        />

      ))}

    </div>
  )
}
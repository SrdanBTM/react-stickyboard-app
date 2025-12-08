

import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import styles from './mainPanelsStickersBase.module.css'
import Pin from '../main-panels-sticker-parts/pin/Pin.jsx'
import Header from '../main-panels-sticker-parts/header/Header.jsx'
import Note from '../main-panels-sticker-parts/note/Note.jsx'
import Footer from '../main-panels-sticker-parts/footer/Footer.jsx'
import DateTime from '../main-panels-sticker-parts/date-time/DateTime.jsx'
import AddDateTimeModal from '../main-panels-sticker-parts/add-date-time-modal/AddDateTimeModal.jsx'
import DeleteStickerModal from '../main-panels-sticker-parts/delete-sticker-modal/DeleteStickerModal.jsx'
import ChangeColorModal from '../main-panels-sticker-parts/change-color-modal/ChangeColorModal.jsx'


export default function MainPanelsStickersBase({ mappedSticker, dragControl }) {

  const { currentBoardPanel } = useContext(MainContext)

  return (
    <div
      className={`${styles.container} ${styles[currentBoardPanel]}`}
      style={{ backgroundColor: mappedSticker.color }}
    >

      {currentBoardPanel === 'board'
        && <Pin dragControl={dragControl} mappedSticker={mappedSticker} />}

      <Header mappedSticker={mappedSticker} />

      {mappedSticker.date && mappedSticker.time
        && <DateTime mappedSticker={mappedSticker} />}

      <Note mappedSticker={mappedSticker} />
      
      <Footer mappedSticker={mappedSticker} />

      {mappedSticker.isDeleteModalOpen
        && <DeleteStickerModal mappedSticker={mappedSticker} />}
      {mappedSticker.isAddDateTimeModalOpen
        && <AddDateTimeModal mappedSticker={mappedSticker} />}
      {mappedSticker.isChangeColorModalOpen
        && <ChangeColorModal mappedSticker={mappedSticker} />}

    </div>

  )
}
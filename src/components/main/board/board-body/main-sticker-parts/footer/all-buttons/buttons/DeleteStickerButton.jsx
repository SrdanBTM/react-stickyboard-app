

import styles from './buttons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { closeCurrentStickerModal } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'
import { openCurrentStickerModal } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'
import { closeAllStickerModals } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'
import { IconDelete, IconClose } from '../../../../../../../../icons/Icons.jsx'


export default function DeleteStickerButton({ mappedSticker }) {

  const { setBoards, currentBoardId } = useContext(MainContext)
  const currentModal = 'isDeleteModalOpen'
  const currentStickerId = mappedSticker.stickerId


  function handleClick() {
    if (mappedSticker.isDeleteModalOpen) {
      closeCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal)
    } else {
      closeAllStickerModals(updateSticker, setBoards, currentBoardId, currentStickerId)
      openCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal)
    }
  }


  return (
    <button
      className={styles.container}
      onClick={handleClick}
      title='Delete sticker'
      style={{
        backgroundColor: mappedSticker[currentModal] ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.35)'
      }}
    >
      {mappedSticker[currentModal]
        ? <IconClose />
        : <IconDelete />
      }
    </button>
  )
}
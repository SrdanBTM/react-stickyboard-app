

import styles from './buttons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { closeCurrentStickerModal } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'
import { openCurrentStickerModal } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'
import { closeAllStickerModals } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'
import { IconDateTime, IconClose } from '../../../../../../../../icons/Icons.jsx'


export default function AddDateIcon({ mappedSticker }) {

  const { setBoards, currentBoardId } = useContext(MainContext)
  const currentModal = 'isAddDateTimeModalOpen'
  const currentStickerId = mappedSticker.stickerId


  function handleClick() {
    if (mappedSticker.isAddDateTimeModalOpen) {
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
      title='Add date and time'
      style={{
        backgroundColor: mappedSticker[currentModal] ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.35)'
      }}
    >
      {mappedSticker[currentModal]
        ? <IconClose />
        : <IconDateTime />
      }
    </button>
  )
}
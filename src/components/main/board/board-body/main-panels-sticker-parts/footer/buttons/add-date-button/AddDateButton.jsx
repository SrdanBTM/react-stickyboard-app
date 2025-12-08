


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerFooterButtonWrapper from '../../../../../../../../wrappers/board-sticker-footer-button-wrapper/BoardStickerFooterButtonWrapper.jsx'


export default function AddDateIcon({ mappedSticker }) {

  const { closeCurrentStickerModal, closeAllStickerModals, openCurrentStickerModal, setBoards, updateSticker, currentBoardId } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL
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
    <BoardStickerFooterButtonWrapper
      currentModal={currentModal}
      mappedSticker={mappedSticker}
    >
      <button onClick={handleClick}>
        {mappedSticker.isAddDateTimeModalOpen
          ? <img src={`${BASE_URL}images/icon-close6.png`} alt='close' />
          : <img src={`${BASE_URL}images/icon-date2.png`} alt='add date' />
        }
      </button>
    </BoardStickerFooterButtonWrapper>
  )
}
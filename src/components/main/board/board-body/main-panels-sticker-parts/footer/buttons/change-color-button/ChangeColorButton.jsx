


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import FooterButtonWrapper from '../../../../main-panels-sticker-wrappers/footer-button-wrapper/FooterButtonWrapper.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { closeCurrentStickerModal } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'
import { openCurrentStickerModal } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'
import { closeAllStickerModals } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'


export default function ChangeColorButton({ mappedSticker }) {

  const { setBoards, currentBoardId } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL
  const currentModal = 'isChangeColorModalOpen'
  const currentStickerId = mappedSticker.stickerId


  function handleClick() {
    if (mappedSticker.isChangeColorModalOpen) {
      closeCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal)
    } else {
      closeAllStickerModals(updateSticker, setBoards, currentBoardId, currentStickerId)
      openCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal)
    }
  }


  return (
    <FooterButtonWrapper
      currentModal={currentModal}
      mappedSticker={mappedSticker}
    >
      <button onClick={handleClick}>
        {mappedSticker.isChangeColorModalOpen
          ? <img src={`${BASE_URL}images/icon-close6.png`} alt='close' />
          : <img src={`${BASE_URL}images/icon-palette1.png`} alt='change color' />
        }
      </button>
    </FooterButtonWrapper>
  )
}







import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function ChangeColorButton({ mappedSticker }) {

  const { closeCurrentStickerModal, closeAllStickerModals, openCurrentStickerModal, setBoards, updateSticker, currentBoardId, BoardStickerFooterButtonWraper } = useContext(MainContext)
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
    <BoardStickerFooterButtonWraper
      currentModal={currentModal}
      mappedSticker={mappedSticker}
    >
      <button onClick={handleClick}>
        {mappedSticker.isChangeColorModalOpen
          ? <img src={`${BASE_URL}images/icon-close6.png`} alt='close' />
          : <img src={`${BASE_URL}images/icon-palette1.png`} alt='change color' />
        }
      </button>
    </BoardStickerFooterButtonWraper>
  )
}




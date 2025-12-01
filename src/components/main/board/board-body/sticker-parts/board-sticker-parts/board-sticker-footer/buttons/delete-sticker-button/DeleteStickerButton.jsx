


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function DeleteStickerButton({ mappedSticker }) {

  const { closeCurrentStickerModal, closeAllStickerModals, openCurrentStickerModal, updateSticker, setBoards, currentBoardId, BoardStickerFooterButtonWraper } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL
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
    <BoardStickerFooterButtonWraper
      currentModal={currentModal}
      mappedSticker={mappedSticker}
    >
      <button onClick={handleClick}>
        {mappedSticker.isDeleteModalOpen
          ? <img src={`${BASE_URL}images/icon-close6.png`} alt='close' />
          : <img src={`${BASE_URL}images/icon-delete5.png`} alt='delete' />
        }
      </button>
    </BoardStickerFooterButtonWraper>
  )
}
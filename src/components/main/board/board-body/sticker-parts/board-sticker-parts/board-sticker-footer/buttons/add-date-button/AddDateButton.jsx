


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function AddDateIcon({ mappedSticker }) {

  const { closeCurrentStickerModal, closeAllStickerModals, openCurrentStickerModal, setBoards, updateSticker, currentBoardId, BoardStickerFooterButtonWraper } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    const currentModal = 'isAddDateTimeModalOpen'
    const currentStickerId = mappedSticker.stickerId
    if (mappedSticker.isAddDateTimeModalOpen) {
      closeCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal)
    } else {
      closeAllStickerModals(updateSticker, setBoards, currentBoardId, currentStickerId)
      openCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal)
    }
  }


  return (
    <BoardStickerFooterButtonWraper>
      <button onClick={handleClick}>
        {mappedSticker.isAddDateTimeModalOpen
          ? <img src={`${BASE_URL}images/icon-close6.png`} alt='close' />
          : <img src={`${BASE_URL}images/icon-date2.png`} alt='add date' />
        }
      </button>
    </BoardStickerFooterButtonWraper>
  )
}
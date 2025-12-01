


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function DeleteStickerButton({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId, BoardStickerFooterButtonWraper, handleStickerModal } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    const currentStickerId = mappedSticker.stickerId
    const currentModal = 'isDeleteModalOpen'
    handleStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal, mappedSticker)
  }

  
  return (
    <BoardStickerFooterButtonWraper>
      <button onClick={handleClick}>
        <img src={`${BASE_URL}images/icon-delete5.png`} alt='delete' />
      </button>
    </BoardStickerFooterButtonWraper>
  )
}
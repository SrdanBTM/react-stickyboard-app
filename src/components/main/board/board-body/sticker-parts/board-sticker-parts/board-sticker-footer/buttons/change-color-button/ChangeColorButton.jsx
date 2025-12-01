


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function ChangeColorButton({ mappedSticker }) {

  const { setBoards, updateSticker, currentBoardId, BoardStickerFooterButtonWraper, handleStickerModal } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    const currentStickerId = mappedSticker.stickerId
    const currentModal = 'isChangeColorModalOpen'
    handleStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal, mappedSticker)
  }


  return (
    <BoardStickerFooterButtonWraper>
      <button onClick={handleClick}>
        <img src={`${BASE_URL}images/icon-palette1.png`} alt='change color' />
      </button>
    </BoardStickerFooterButtonWraper>
  )
}
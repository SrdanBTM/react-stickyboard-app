


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function AddDateIcon({ mappedSticker }) {

  const { setBoards, updateSticker, currentBoardId, BoardStickerFooterButtonWraper, handleStickerModal } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL
  const currentModal = 'isAddDateTimeModalOpen'


  function handleClick() {
    const currentStickerId = mappedSticker.stickerId
    handleStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal, mappedSticker)
  }


  return (
    <BoardStickerFooterButtonWraper>
      <button onClick={handleClick}>
        <img src={`${BASE_URL}images/icon-date2.png`} alt='add date' />
      </button>
    </BoardStickerFooterButtonWraper>
  )
}
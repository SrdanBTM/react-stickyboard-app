

import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerModalButtonWrapper from '../../../../../../../../../wrappers/board-sticker-modal-button-wrapper/BoardStickerModalButtonWrapper.jsx'


export default function BackButton({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    const propertyToUpdate = { key: 'isAddDateTimeModalOpen', value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  return (
    <BoardStickerModalButtonWrapper>
      <button onClick={handleClick}>
        <img src={`${BASE_URL}images/icon-back1.png`} alt='back' />
        <span>Back</span>
      </button>
    </BoardStickerModalButtonWrapper>
  )
}
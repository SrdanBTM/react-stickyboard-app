

import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerModalButtonWrapper from '../../../../../../../../wrappers/board-sticker-modal-button-wrapper/BoardStickerModalButtonWrapper.jsx'


export default function ClearDateButton({ mappedSticker }) {


  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    const propertyToUpdate1 = { key: 'isDateTimeValid', value: null }
    const propertyToUpdate2 = { key: 'isDateValid', value: false }
    const propertyToUpdate3 = { key: 'isTimeValid', value: false }
    const propertyToUpdate4 = { key: 'date', value: null }
    const propertyToUpdate5 = { key: 'time', value: null }
    const propertyToUpdate6 = { key: 'dayInWeek', value: null }
    const propertyToUpdate7 = { key: 'isAddDateTimeModalOpen', value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate5)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate6)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate7)
  }


  return (
    <BoardStickerModalButtonWrapper>
      <button
        onClick={handleClick}
        style={{
          opacity: mappedSticker.isDateTimeValid ? 1 : 0,
          pointerEvents: mappedSticker.isDateTimeValid ? 'auto' : 'none'
        }}
      >
        <img src={`${BASE_URL}images/icon-clear3.png`} alt='clear' />
        <span>Clear</span>
      </button>
    </BoardStickerModalButtonWrapper>
  )

}
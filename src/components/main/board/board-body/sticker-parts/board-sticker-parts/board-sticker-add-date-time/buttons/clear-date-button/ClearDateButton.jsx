

import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerModalButton from '../../../board-sticker-modal-button/BoardStickerModalButton.jsx'


export default function ClearDateButton({ mappedSticker }) {


  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function handleClick() {
    const propertyToUpdate1 = { key: 'isDateTimeValid', value: null }
    const propertyToUpdate2 = { key: 'isDateValid', value: false }
    const propertyToUpdate3 = { key: 'isTimeValid', value: false }
    const propertyToUpdate4 = { key: 'date', value: null }
    const propertyToUpdate5 = { key: 'time', value: null }
    const propertyToUpdate6 = { key: 'dayInWeek', value: null }
    const propertyToUpdate7 = { key: 'isAddDateTimeOpen', value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate5)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate6)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate7)
  }


  const props = {
    handleClick: handleClick,
    imgPath: 'images/icon-clear3.png',
    imgAlt: 'clear',
    title: 'Clear',
    mappedSticker: mappedSticker
  }


  return <BoardStickerModalButton props={props}  />

}
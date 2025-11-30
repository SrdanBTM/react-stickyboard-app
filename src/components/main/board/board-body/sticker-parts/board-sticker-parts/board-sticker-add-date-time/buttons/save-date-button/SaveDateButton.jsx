

import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerModalButton from '../../../board-sticker-modal-button/BoardStickerModalButton.jsx'


export default function SaveDateButton({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function findDayInWeek(dateInput) {
    const [day, month, year] = dateInput.trim().split('.')
    const dayInWeekNumber = new Date(year, month - 1, day).getDay()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayInWeek = days[dayInWeekNumber]
    return dayInWeek
  }


  function handleClick() {
    if (mappedSticker.dateInput && mappedSticker.timeInput) {
      const dayInWeek = findDayInWeek(mappedSticker.dateInput)
      const propertyToUpdate1 = { key: 'isDateTimeValid', value: true }
      const propertyToUpdate2 = { key: 'date', value: mappedSticker.dateInput }
      const propertyToUpdate3 = { key: 'time', value: mappedSticker.timeInput }
      const propertyToUpdate4 = { key: 'dayInWeek', value: dayInWeek }
      const propertyToUpdate5 = { key: 'isAddDateTimeOpen', value: false }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate5)
    } else {
      const propertyToUpdate1 = { key: 'isDateTimeValid', value: false }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    }
  }


  const props = {
    handleClick: handleClick,
    imgPath: 'images/icon-save1.png',
    imgAlt: 'save',
    title: 'Save',
    mappedSticker: mappedSticker
  }


  return <BoardStickerModalButton props={props} />
}
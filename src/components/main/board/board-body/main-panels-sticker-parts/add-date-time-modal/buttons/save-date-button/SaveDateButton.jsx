

import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import ModalButtonWrapper from '../../../../main-panels-sticker-wrappers/modal-button-wrapper/ModalButtonWrapper.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx' 
import { closeCurrentStickerModal } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'


export default function SaveDateButton({ mappedSticker }) {

  const { setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId
  const BASE_URL = import.meta.env.BASE_URL


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
      const currentModal = 'isAddDateTimeModalOpen'
      const propertyToUpdate1 = { key: 'isDateTimeValid', value: true }
      const propertyToUpdate2 = { key: 'date', value: mappedSticker.dateInput }
      const propertyToUpdate3 = { key: 'time', value: mappedSticker.timeInput }
      const propertyToUpdate4 = { key: 'dayInWeek', value: dayInWeek }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)
      closeCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal)
    } else {
      const propertyToUpdate1 = { key: 'isDateTimeValid', value: false }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    }
  }


  return (
    <ModalButtonWrapper>
      <button onClick={handleClick}>
        <img src={`${BASE_URL}images/icon-save1.png`} alt='save' />
        <span>Save</span>
      </button>
    </ModalButtonWrapper>
  )
}
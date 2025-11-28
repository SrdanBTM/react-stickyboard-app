

import styles from './buttons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Buttons({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function updateStickerCloseAddDateTime() {
    const propertyToUpdate = { key: 'isAddDateTimeOpened', value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  function findDayInWeek(dateInput) {
    const [day, month, year] = dateInput.trim().split('.')
    const dayInWeekNumber = new Date(year, month - 1, day).getDay()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayInWeek = days[dayInWeekNumber]
    return dayInWeek
  }


  function handleClickSave() {
    let propertyToUpdate1 = null
    let propertyToUpdate2 = null
    let propertyToUpdate3 = null
    let propertyToUpdate4 = null

    if (mappedSticker.dateInput && mappedSticker.timeInput) {
      const dayInWeek = findDayInWeek(mappedSticker.dateInput)
      propertyToUpdate1 = { key: 'isDateTimeValid', value: true }
      propertyToUpdate2 = { key: 'date', value: mappedSticker.dateInput }
      propertyToUpdate3 = { key: 'time', value: mappedSticker.timeInput }
      propertyToUpdate4 = { key: 'dayInWeek', value: dayInWeek }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)
      updateStickerCloseAddDateTime()
    } else {
      propertyToUpdate1 = { key: 'isDateTimeValid', value: false }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    }
  }


  function handleClickClose() {
    updateStickerCloseAddDateTime()
  }


  function handleClickDelete() {
    const propertyToUpdate1 = { key: 'isDateTimeValid', value: null }
    const propertyToUpdate2 = { key: 'isDateValid', value: false }
    const propertyToUpdate3 = { key: 'isTimeValid', value: false }
    const propertyToUpdate4 = { key: 'date', value: null }
    const propertyToUpdate5 = { key: 'time', value: null }
    const propertyToUpdate6 = { key: 'dayInWeek', value: null }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate5)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate6)
    updateStickerCloseAddDateTime()
  }


  return (
    <div
      className={styles.container}
    >
      <button
        className={styles.saveButton}
        onClick={handleClickSave}
      >
        Save
      </button>

      <button
        className={styles.closeButton}
        onClick={handleClickClose}
      >
        Close
      </button>

      <button
        className={styles.deleteButton}
        onClick={handleClickDelete}
      >
        Delete
      </button>
    </div>
  )
}

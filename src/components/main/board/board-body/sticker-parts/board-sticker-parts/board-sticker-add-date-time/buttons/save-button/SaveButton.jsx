

import styles from './saveButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function SaveButton({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
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
      const propertyToUpdate1 = { key: 'isDateTimeValid', value: true }
      const propertyToUpdate2 = { key: 'date', value: mappedSticker.dateInput }
      const propertyToUpdate3 = { key: 'time', value: mappedSticker.timeInput }
      const propertyToUpdate4 = { key: 'dayInWeek', value: dayInWeek }
      const propertyToUpdate5 = { key: 'isAddDateTimeOpened', value: false }
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


  return (
    <button
      className={styles.container}
      onClick={handleClick}
    >
      <img src={`${BASE_URL}images/icon-save1.png`} alt="save" />
    </button>
  )
}
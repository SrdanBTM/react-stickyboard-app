

import styles from './buttons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { closeCurrentStickerModal } from '../../../../../../../../helper-functions/HelperFunctionsHandleStickerModal.jsx'
import { IconSave } from '../../../../../../../../icons/Icons.jsx'


export default function SaveButton({ mappedSticker }) {

  const { boards, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId
  const BASE_URL = import.meta.env.BASE_URL




  function validateDateTimeValues(validDateTime) {
    const { day, month, year, hours, minutes } = validDateTime

    if (day == null || month == null || year == null || hours == null || minutes == null) return false;

    if (isNaN(day) || isNaN(month) || isNaN(year) || isNaN(hours) || isNaN(minutes)) return false;

    if (day < 1 || day > 31) return false;
    if (month < 1 || month > 12) return false;
    if (year < 2025 || year > 2050) return false;
    if (hours < 0 || hours > 23) return false;
    if (minutes < 0 || minutes > 59) return false;

    const daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) return false;

    return true;
  }


  function findDayInWeek(validDateTime) {
    const { day, month, year } = validDateTime
    const dayInWeekNumber = new Date(year, month - 1, day).getDay()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayInWeek = days[dayInWeekNumber]
    return dayInWeek
  }


  function handleClick() {
    const validDateTime = {
      day: parseInt(mappedSticker.dateTimeCurrentValue.day),
      month: parseInt(mappedSticker.dateTimeCurrentValue.month),
      year: parseInt(mappedSticker.dateTimeCurrentValue.year) + 2000,
      hours: parseInt(mappedSticker.dateTimeCurrentValue.hours),
      minutes: parseInt(mappedSticker.dateTimeCurrentValue.minutes)
    }

    const isValid = validateDateTimeValues(validDateTime)

    if (isValid) {
      const dayInWeek = findDayInWeek(validDateTime)
      const currentModal = 'isAddDateTimeModalOpen'
      updateSticker(setBoards, currentBoardId, currentStickerId, { key: 'isDateTimeValid', value: true })
      updateSticker(setBoards, currentBoardId, currentStickerId, {
        key: 'dateTimeValidValue', value: {
          day: validDateTime.day,
          month: validDateTime.month,
          year: validDateTime.year,
          hours: validDateTime.hours,
          minutes: validDateTime.minutes,
          dayInWeek: dayInWeek
        }
      })

      closeCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal)
    } else {
      updateSticker(setBoards, currentBoardId, currentStickerId, { key: 'isDateTimeValid', value: false })
    }
  }


  return (
    <button
      className={`${styles.container} ${styles.buttonNormal} icon iconNormal`}
      onClick={handleClick}
    >
      <IconSave />
    </button>
  )
}
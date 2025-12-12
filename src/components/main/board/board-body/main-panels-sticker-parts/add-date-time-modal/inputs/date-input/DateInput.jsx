

import styles from './dateInput.module.css'
import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function DateInput({ mappedSticker }) {

  const { currentBoardId, setBoards } = useContext(MainContext)
  const [inputValue, setInputValue] = useState('')


  useEffect(() => {
    setInputValue(mappedSticker.date ? mappedSticker.date : '')
  }, [mappedSticker.isAddDateTimeModalOpen])


  function handleChangeDate(e) {
    setInputValue(e.currentTarget.value)

    const currentStickerId = mappedSticker.stickerId
    const propertyToUpdate = { key: 'isDateTimeValid', value: null }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  function dateValidation(value) {

    const dateParts = value.trim().split('.')
    if (dateParts.length !== 3) return false


    const [dayString, monthString, yearString] = dateParts
    if (!/^\d+$/.test(dayString) || !/^\d+$/.test(monthString) || !/^\d+$/.test(yearString)) return false


    const day = parseInt(dayString)
    const month = parseInt(monthString)
    const year = parseInt(yearString)

    const daysInEnteredMonth = new Date(year, month, 0).getDate()
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1
    const currentDay = new Date().getDate()

    if (dayString.length > 2 || day < 1 || day > daysInEnteredMonth) return false
    if (monthString.length > 2 || month < 1 || month > 12) return false
    if (yearString.length !== 4) return false

    if (year < currentYear || year > currentYear + 10) return false
    if (year === currentYear && month < currentMonth) return false
    if (year === currentYear && month <= currentMonth && day < currentDay) return false


    return true
  }


  useEffect(() => {
    const isValid = dateValidation(inputValue)
    const currentStickerId = mappedSticker.stickerId

    const propertyToUpdate = { key: 'dateInput', value: isValid ? inputValue : null }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)

    if (inputValue === 0) {
      const propertyToUpdate = { key: 'isDateTimeValid', value: null }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
    }
  }, [inputValue])


  return (
    <div className={styles.container}>
      <label>Date : </label>
      <input
        type="text"
        placeholder='dd.mm.yyyy'
        maxLength={10}
        onChange={handleChangeDate}
        value={inputValue}
      />
    </div>
  )
}
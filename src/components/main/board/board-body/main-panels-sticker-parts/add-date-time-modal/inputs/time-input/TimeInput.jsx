

import styles from './timeInput.module.css'
import { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function TimeInput({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const [inputValue, setInputValue] = useState('')


  useEffect(() => {
    setInputValue(mappedSticker.time ? mappedSticker.time : '')
  }, [mappedSticker.isAddDateTimeModalOpen])


  function handleChangeTime(e) {
    setInputValue(e.currentTarget.value)

    const currentStickerId = mappedSticker.stickerId
    const propertyToUpdate = { key: 'isDateTimeValid', value: null }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  function timeValidation(value) {

    console.log(value);
    
    const timeParts = value.split(':')
    if (timeParts.length !== 2) return false

    const [hoursString, minutesString] = timeParts
    if (!/^\d+$/.test(hoursString) || !/^\d+$/.test(minutesString)) return false

    const hours = parseInt(hoursString)
    const minutes = parseInt(minutesString)

    if (hoursString.length !== 2 || minutesString.length !== 2) return false
    if (hours < 0 || hours > 23) return false
    if (minutes < 0 || minutes > 59) return false

    return true
  }


  useEffect(() => {
    const isValid = timeValidation(inputValue)
    const currentStickerId = mappedSticker.stickerId

    const propertyToUpdate = { key: 'timeInput', value: isValid ? inputValue : null }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)

    if (inputValue === 0) {
      const propertyToUpdate = { key: 'isDateTimeValid', value: null }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
    }
  }, [inputValue])


  return (
    <div className={styles.container}>
      <label>Time : </label>
      <input
        type="text"
        placeholder='hh:mm'
        maxLength={5}
        onChange={handleChangeTime}
        value={inputValue}
      />
    </div>
  )
}
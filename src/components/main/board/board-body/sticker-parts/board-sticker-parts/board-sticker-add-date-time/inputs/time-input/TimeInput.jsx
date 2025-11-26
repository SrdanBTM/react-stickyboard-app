

import styles from './timeInput.module.css'
import { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function TimeInput() {

  const { setValidatedValueDate, setValidatedValueTime } = useContext(MainContext)


  function handleChangeTime(e) {
    if (e.currentTarget.value.length === 5) {
      const validatedValue = timeValidation(e.currentTarget.value)
      setValidatedValueTime(validatedValue)
    } else {
      setValidatedValueTime('init')
    }
  }


  function timeValidation(value) {

    const timeParts = value.split(':')
    if (timeParts.length !== 2) return false

    const [hoursString, minutesString] = timeParts
    if (!/^\d+$/.test(hoursString) || !/^\d+$/.test(minutesString)) return false

    const hours = parseInt(hoursString)
    const minutes = parseInt(minutesString)

    if (hours < 0 || hours > 23) return false
    if (minutes < 0 || minutes > 59) return false

    return value
  }


  return (
    <div>
      <label>Time : </label>
      <input
        type="text"
        placeholder='hh:mm'
        maxLength={5}
        onChange={handleChangeTime}
      />
    </div>
  )
}
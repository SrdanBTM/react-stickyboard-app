

import styles from './inputs.module.css'
import { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Inputs() {

  const { setIsInputDateValid, setIsInputTimeValid } = useContext(MainContext)



  function dateValidation(dateParts) {
    if (dateParts.length !== 3) return false


    const [dayString, monthString, yearString] = dateParts
    if (!/^\d+$/.test(dayString) || !/^\d+$/.test(monthString) || !/^\d+$/.test(yearString)) return false


    const day = parseInt(dayString)
    const month = parseInt(monthString)
    const year = parseInt(yearString)

    const daysInEnteredMonth = new Date(year, month, 0).getDate()
    const currentYear = new Date().getFullYear()

    if (dayString.length > 2 || day < 1 || day > daysInEnteredMonth) return false
    if (monthString.length > 2 || month < 1 || month > 12) return false
    if (yearString.length !== 4 || year < currentYear || year > currentYear + 5) return false


    return true
  }


  function timeValidation(timeParts) {
    if (timeParts.lengt !== 2) return false

    const [hoursString, minutesString] = timeParts
    if(!/^\d+$/.test(hoursString) || !/^\d+$/.test(minutesString)) return false

    const hours = parseInt(hoursString)
    const minutes = parseInt(minutesString)

    if (hours < 0 || hours > 23) return false
    if (minutes < 0 || minutes > 59) return false

    return true
  }



  function handleBlurDate(e) {
    if (e.currentTarget.value) {
      const dateParts = e.currentTarget.value.trim().split('.')
      const isValid = dateValidation(dateParts)
      setIsInputDateValid(isValid)
    }
  }

  function handleBlurTime(e) {
    if (e.currentTarget.value) {
      const timeParts = e.currentTarget.value.split(':')
      const isValid = timeValidation(timeParts)
      setIsInputTimeValid(isValid)
    }
  }






  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder='Write date'
        onBlur={handleBlurDate}
      />

      <input
        type="text"
        placeholder='Write time'
        onBlur={handleBlurTime}
      />
    </div>
  )
}
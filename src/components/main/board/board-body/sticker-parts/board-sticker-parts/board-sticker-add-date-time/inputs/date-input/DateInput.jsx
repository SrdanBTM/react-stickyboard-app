

import styles from './dateInput.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function DateInput() {

  const { setDayInWeek, setValidatedValueDate, inputValueDate, setInputValueDate  } = useContext(MainContext)

  
  function handleChangeDate(e) {
    setInputValueDate(e.currentTarget.value)

    if (e.currentTarget.value.length === 10) {
      const validatedValue = dateValidation(e.currentTarget.value)
      setValidatedValueDate(validatedValue)
    } else {
      setValidatedValueDate('init')
    }
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

    if (dayString.length > 2 || day < 1 || day > daysInEnteredMonth) return false
    if (monthString.length > 2 || month < 1 || month > 12) return false
    if (yearString.length !== 4 || year < currentYear || year > currentYear + 5) return false


    const dayInWeekNumber = new Date(year, month - 1, day).getDay()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayInWeek = days[dayInWeekNumber]
    setDayInWeek(dayInWeek)

    return value
  }


  return (
    <div className={styles.container}>
      <label>Date : </label>
      <input
        type="text"
        placeholder='dd.mm.yyyy'
        maxLength={10}
        onChange={handleChangeDate}
        value={inputValueDate}
      />
    </div>
  )
}
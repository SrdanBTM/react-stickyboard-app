

import styles from './message.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Message() {

  const { validatedValueDate, validatedValueTime } = useContext(MainContext)


  const invalidFormatMessage = 'Invalid date or time format.'
  let confirmMessage = null

  if (validatedValueDate && validatedValueDate !== 'init' 
    && validatedValueTime && validatedValueTime !== 'init' ) {
    const [year, month, day] = validatedValueDate.trim().split('.')
    const dayInWeek = new Date(year, month - 1, day).getDay()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    confirmMessage = validatedValueDate !== false
      && validatedValueTime !== false
      && `${validatedValueDate} | ${days[dayInWeek - 1]} | ${validatedValueTime}`
  }



  return (
    <div
      className={styles.container}
      style={{
        color: !validatedValueDate || !validatedValueTime ? '#9d0000' : 'var(--font-color1)'
      }}
    >
      <span>{!validatedValueDate || !validatedValueTime ? invalidFormatMessage : confirmMessage}</span>
    </div>
  )
}
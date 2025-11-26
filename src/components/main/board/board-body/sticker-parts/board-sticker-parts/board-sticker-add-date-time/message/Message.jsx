

import styles from './message.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Message() {

  const { validatedValueDate, validatedValueTime, dayInWeek } = useContext(MainContext)


  const invalidFormatMessage = 'Invalid date or time format.'
  let confirmMessage = null

  if (validatedValueDate && validatedValueDate !== 'init' 
    && validatedValueTime && validatedValueTime !== 'init' ) {

    confirmMessage = validatedValueDate !== false
      && validatedValueTime !== false
      && `${validatedValueDate} | ${dayInWeek} | ${validatedValueTime}`
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
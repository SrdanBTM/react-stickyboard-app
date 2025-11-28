

import styles from './message.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Message({ mappedSticker }) {

  const { } = useContext(MainContext)


  let message = ''
  if (mappedSticker.isDateValid && mappedSticker.isTimeValid) {
    message = `${mappedSticker.dateInput} | ${mappedSticker.dayInWeek} | ${mappedSticker.timeInput}`

  } else if (mappedSticker.isDateTimeValid === false) {
    message = 'Invalid date or time format.'
  }


  return (
    <div
      className={styles.container}
      style={{
        color: mappedSticker.isDateTimeValid === false ? '#9d0000' : 'var(--font-color1)'
      }}
    >
      <span>{message}</span>
    </div>
  )
}



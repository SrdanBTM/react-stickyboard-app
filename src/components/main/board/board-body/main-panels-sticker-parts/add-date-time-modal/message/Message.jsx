

import styles from './message.module.css'


export default function Message({ mappedSticker }) {


  let message = ''
  if (mappedSticker.isDateValid && mappedSticker.isTimeValid) {
    message = `${mappedSticker.dateInput} | ${mappedSticker.dayInWeek} | ${mappedSticker.timeInput}`

  } else if (mappedSticker.isDateTimeValid === false) {
    message = 'Invalid date or time value.'
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



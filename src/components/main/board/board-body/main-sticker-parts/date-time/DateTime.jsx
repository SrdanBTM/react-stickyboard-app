

import styles from './dateTime.module.css'



export default function DateTime({ mappedSticker }) {

  const day = String(mappedSticker.dateTimeValidValue.day).padStart(2, '0')
  const monthName = mappedSticker.dateTimeValidValue.monthName
  const year = String(mappedSticker.dateTimeValidValue.year)
  const dayInWeek = mappedSticker.dateTimeValidValue.dayInWeek
  const hours = String(mappedSticker.dateTimeValidValue.hours).padStart(2, '0')
  const minutes = String(mappedSticker.dateTimeValidValue.minutes).padStart(2, '0')


  const twoDots = <span className={styles.twoDots}>:</span>


  return (
    <div className={styles.container}>
      {mappedSticker.isDateTimeValid
        ?
        <div className={styles.dateTime}>
          <div className={styles.firstRow}>
            <span className={styles.date}>
              {day} {monthName} {year}
            </span>

            <span className={styles.oneDot}>·</span>

            <span className={styles.time}>
              {hours}{twoDots}{minutes}
            </span>
          </div>

          <div className={styles.secondRow}>
            <span className={styles.dayInWeek}>
              {dayInWeek}
            </span>
          </div>

        </div>
        : ''}
    </div>
  )
}
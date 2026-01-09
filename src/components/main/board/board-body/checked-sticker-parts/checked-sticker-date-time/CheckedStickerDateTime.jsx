

import styles from './checkedStickerDateTime.module.css'



export default function CheckedStickerDateTime({ mappedSticker }) {


  const day = String(mappedSticker.dateTimeValidValue.day).padStart(2, '0')
  const monthName = mappedSticker.dateTimeValidValue.monthName ? mappedSticker.dateTimeValidValue.monthName.slice(0,3) : ''
  const year = String(mappedSticker.dateTimeValidValue.year)
  const hours = String(mappedSticker.dateTimeValidValue.hours).padStart(2, '0')
  const minutes = String(mappedSticker.dateTimeValidValue.minutes).padStart(2, '0')


  const twoDots = <span className={styles.twoDots}>:</span>


  return (
    <div className={styles.container}>
      {mappedSticker.isDateTimeValid
        ?
        <div className={styles.dateTime}>

          <span className={styles.date}>
            {day} {monthName} {year}
          </span>

          <span className={styles.oneDot}>·</span>

          <span className={styles.time}>
            {hours}{twoDots}{minutes}
          </span>

        </div>
        : ''
      }
    </div>
  )
}


import styles from './dateTime.module.css'



export default function DateTime({ mappedSticker }) {

  const dtvv = mappedSticker.dateTimeValidValue

  let dateTimeString = ''
  if (mappedSticker.isDateTimeValid) {
    dateTimeString = `${dtvv.day}.${dtvv.month}.${dtvv.year} | ${dtvv.dayInWeek} | ${dtvv.hours}:${dtvv.minutes}`
  }


  return (
    <div className={styles.container}>
      <span>{dateTimeString}</span>
    </div>
  )
}
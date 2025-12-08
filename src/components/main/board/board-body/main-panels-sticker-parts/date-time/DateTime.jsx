

import styles from './dateTime.module.css'



export default function DateTime({ mappedSticker }) {

  let dateTimeString = ''
  if (mappedSticker.date && mappedSticker.time) {
    dateTimeString = `${mappedSticker.date} | ${mappedSticker.dayInWeek} | ${mappedSticker.time}`
  }


  return (
    <div className={styles.container}>
      <span>{dateTimeString}</span>
    </div>
  )
}
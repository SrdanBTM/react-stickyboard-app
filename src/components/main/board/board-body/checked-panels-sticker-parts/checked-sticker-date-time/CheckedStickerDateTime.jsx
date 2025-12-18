

import styles from './checkedStickerDateTime.module.css'



export default function CheckedStickerDateTime({ mappedSticker }) {

  const dtvv = mappedSticker.dateTimeValidValue

  let dateTimeString = ''
  if (mappedSticker.isDateTimeValid) {
    dateTimeString = `${dtvv.day}.${dtvv.month}.${dtvv.year} · ${dtvv.hours}:${dtvv.minutes}`
  }


  return (
    <div className={styles.container}>
      <span>{dateTimeString}</span>
    </div>
  )
}
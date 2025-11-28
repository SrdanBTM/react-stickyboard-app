

import styles from './boardStickerDateTime.module.css'



export default function BoardStickerDateTime({ mappedSticker }) {

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
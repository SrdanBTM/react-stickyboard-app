

import styles from './buttons.module.css'
import SaveDateButton from './save-date-button/SaveDateButton.jsx'
import BackButton from './back-button/BackButton.jsx'
import ClearDateButton from './clear-date-button/ClearDateButton.jsx'


export default function Buttons({ mappedSticker }) {
  return (
    <div
      className={styles.container}
      style={{ width: mappedSticker.isDateTimeValid ? '220px' : '150px' }}
    >
      <SaveDateButton mappedSticker={mappedSticker} />
      {/* <BackButton mappedSticker={mappedSticker} /> */}
      <ClearDateButton mappedSticker={mappedSticker} />
    </div>
  )
}

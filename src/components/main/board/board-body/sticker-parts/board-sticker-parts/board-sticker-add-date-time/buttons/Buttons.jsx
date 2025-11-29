

import styles from './buttons.module.css'
import SaveButton from './save-button/SaveButton.jsx'
import BackButton from './back-button/BackButton.jsx'
import DeleteButton from './delete-button/DeleteButton.jsx'


export default function Buttons({ mappedSticker }) {
  return (
    <div
      className={styles.container}
      style={{ width: mappedSticker.isDateTimeValid ? '220px' : '150px' }}
    >
      <SaveButton mappedSticker={mappedSticker} />
      <BackButton mappedSticker={mappedSticker} />
      {mappedSticker.isDateTimeValid && <DeleteButton mappedSticker={mappedSticker} />}
    </div>
  )
}

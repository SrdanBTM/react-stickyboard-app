

import styles from './buttons.module.css'
import SaveButton from './save-button/SaveButton.jsx'
import BackButton from './back-button/BackButton.jsx'
import DeleteButton from './delete-button/DeleteButton.jsx'


export default function Buttons({ mappedSticker }) {
  return (
    <div className={styles.container}>
      <SaveButton mappedSticker={mappedSticker} />
      <BackButton mappedSticker={mappedSticker} />
      <DeleteButton mappedSticker={mappedSticker} />
    </div>
  )
}

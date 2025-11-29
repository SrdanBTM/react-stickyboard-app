

import styles from './buttons.module.css'
import ChangeColorButton from './change-color-button/ChangeColorButton.jsx'
import DeleteButton from './delete-button/DeleteButton.jsx'
import AddDateButton from './add-date-button/AddDateButton.jsx'


export default function Buttons({ mappedSticker }) {
  return (
    <div className={styles.container}>
      <DeleteButton mappedSticker={mappedSticker} />
      <AddDateButton mappedSticker={mappedSticker} />
      <ChangeColorButton mappedSticker={mappedSticker} />
    </div>
  )
}
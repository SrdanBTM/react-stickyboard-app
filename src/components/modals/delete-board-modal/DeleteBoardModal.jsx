

import styles from './deleteBoardModal.module.css'
import Delete from './delete/Delete.jsx'
import Close from './close/Close.jsx'

export default function DeleteBoardModal() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.message}>
          <p>The selected board has 3 stickers.</p>
          <p>Deleting this board will also remove all stickers on it.</p>
          <p>Do you want to continue?</p>
        </div>

        <div className={styles.buttons}>
          <Delete />
          <Close />
        </div>
      </div>
    </div>
  )
}
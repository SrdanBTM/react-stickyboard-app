

import styles from './boardStickerDelete.module.css'
import DeleteButton from './delete-button/DeleteButton.jsx'


export default function BoardStickerDelete({ mappedSticker }) {

  return (
    <div
      className={styles.container}
      style={{
        transform: mappedSticker.isDeleteOpen ? 'scale(1)' : 'scale(0)',
        transition: 'transform 0.3s ease',
        backgroundColor: mappedSticker.color
      }}
    >
      <div className={styles.content}>
        <DeleteButton mappedSticker={mappedSticker} />
      </div>
    </div>
  )
}
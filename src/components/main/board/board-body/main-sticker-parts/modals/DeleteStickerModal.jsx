


import styles from './modals.module.css'
import Title from './modal-parts/title/Title.jsx'
import DeleteButton from './modal-parts/buttons/DeleteButton.jsx'


export default function DeleteStickerModal({ mappedSticker }) {

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker.color,
      }}
    >

      <div className={styles.header}>
        <Title title='Delete this sticker?' />
      </div>

      <div className={styles.body}>
        <div className={`${styles.buttons} ${styles.deleteButton}`}>
          <DeleteButton mappedSticker={mappedSticker} />
        </div>
      </div>

    </div>
  )
}





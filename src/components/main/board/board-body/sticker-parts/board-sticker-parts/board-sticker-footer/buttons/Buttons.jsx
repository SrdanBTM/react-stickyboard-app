

import styles from './buttons.module.css'
import ChangeColorButton from './change-color-button/ChangeColorButton.jsx'
import DeleteStickerButton from './delete-sticker-button/DeleteStickerButton.jsx'
import AddDateButton from './add-date-button/AddDateButton.jsx'


export default function Buttons({ mappedSticker }) {
  return (
    <div className={styles.container}>
      <DeleteStickerButton mappedSticker={mappedSticker} />
      <AddDateButton mappedSticker={mappedSticker} />
      <ChangeColorButton mappedSticker={mappedSticker} />
    </div>
  )
}
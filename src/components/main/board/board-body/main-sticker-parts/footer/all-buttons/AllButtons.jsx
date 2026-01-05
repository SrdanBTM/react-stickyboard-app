

import styles from './allButtons.module.css'
import ChangeColorButton from './buttons/ChangeColorButton.jsx'
import DeleteStickerButton from './buttons/DeleteStickerButton.jsx'
import AddDateButton from './buttons/AddDateButton.jsx'


export default function AllButtons({ mappedSticker }) {
  return (
    <div className={styles.container}>
      <DeleteStickerButton mappedSticker={mappedSticker} />
      <AddDateButton mappedSticker={mappedSticker} />
      <ChangeColorButton mappedSticker={mappedSticker} />
    </div>
  )
}
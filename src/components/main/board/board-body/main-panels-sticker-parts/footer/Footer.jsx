

import styles from './footer.module.css'
import Buttons from './buttons/Buttons.jsx'


export default function Footer({ mappedSticker, isHover }) {
  return (
    <div
      className={styles.container}
      style={{
        opacity: isHover
          || mappedSticker.isAddDateTimeModalOpen
          || mappedSticker.isChangeColorModalOpen
          || mappedSticker.isDeleteModalOpen
          ? 1 : 0,
        transition: 'opacity 0.3s ease',
        backgroundColor: mappedSticker.color
      }}
    >
      <Buttons mappedSticker={mappedSticker} />
    </div>
  )
}
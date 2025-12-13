

import styles from './footer.module.css'
import Buttons from './buttons/Buttons.jsx'


export default function Footer({ mappedSticker }) {
  return (
    <div 
      className={styles.container} 
      style={{
        opacity: mappedSticker.isHover 
        || mappedSticker.isAddDateTimeModalOpen 
        || mappedSticker.isChangeColorModalOpen 
        || mappedSticker.isDeleteModalOpen 
        ? 1 : 0,
        backgroundColor: mappedSticker.color
      }}
      >
      <Buttons mappedSticker={mappedSticker} />
    </div>
  )
}
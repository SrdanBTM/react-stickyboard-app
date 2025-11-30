

import styles from './boardStickerModalButton.module.css'


export default function BoardStickerModalButton({ props }) {

  
  const { handleClick, imgPath, imgAlt, title, mappedSticker } = props
  const BASE_URL = import.meta.env.BASE_URL

  const isDelete = imgAlt === 'clear'
  const isDateTimeValid = mappedSticker ? mappedSticker.isDateTimeValid : null



  return (
    <button
      className={styles.container}
      onClick={handleClick}
      style={{
        opacity: isDelete && !isDateTimeValid ? 0 : 1
      }}
    >
      <img src={`${BASE_URL}${imgPath}`} alt={imgAlt} />
      <span>{title}</span>
    </button>
  )
}
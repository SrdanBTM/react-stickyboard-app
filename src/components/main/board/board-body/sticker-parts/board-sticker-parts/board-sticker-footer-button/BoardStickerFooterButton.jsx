

import styles from './boardStickerFooterButton.module.css'


export default function BoardStickerFooterButton({ props }) {

  const { handleClick, imgPath, imgAlt } = props
  const BASE_URL = import.meta.env.BASE_URL

  return (
    <button
      className={styles.container}
      onClick={handleClick}
    >
      <img src={`${BASE_URL}${imgPath}`} alt={imgAlt} />
    </button>
  )
}
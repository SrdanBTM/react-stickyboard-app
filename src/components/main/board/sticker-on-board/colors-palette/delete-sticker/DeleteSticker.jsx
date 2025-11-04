

import styles from './deleteSticker.module.css'


export default function DeleteSticker() {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container}>
      <img src={`${BASE_URL}images/icon-delete3.png`} alt="delete sticker" />
    </div>
  )
}
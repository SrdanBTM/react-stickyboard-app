

import styles from './stickerCheck.module.css'


export default function StickerCheck() {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container}>
      <img src={`${BASE_URL}images/checked4.png`} alt="check sticker" />
    </div>
  )
}
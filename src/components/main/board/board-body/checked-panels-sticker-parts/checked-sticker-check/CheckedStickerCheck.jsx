

import styles from './checkedStickerCheck.module.css'


export default function CheckedStickerCheck() {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container}>
        <img src={`${BASE_URL}images/checked3.png`} alt="checked" />
    </div>
  )
}
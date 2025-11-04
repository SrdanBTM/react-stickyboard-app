

import styles from './dots.module.css'

export default function Dots() {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div
      className={styles.container}
    >
      <img src={`${BASE_URL}images/icon-dots4.png`} alt="dots icon" />
    </div>
  )
}
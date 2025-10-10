
import styles from './logo.module.css'

export default function Logo() {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.logo}>
      <img src={`${BASE_URL}images/icon-logo.png`} alt="logo image" />
      <span>StickyBoard</span>
    </div>
  )
}

import styles from './addDateIcon.module.css'


export default function AddDateIcon() {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={`${BASE_URL}images/icon-date2.png`} alt="add date" />
      </div>
    </div>
  )
}
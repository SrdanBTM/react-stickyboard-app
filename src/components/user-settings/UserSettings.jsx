

import styles from './user-settings.module.css'

export default function UserSettings() {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.userSettings}>
      <div className={styles.user}>
        <img src={`${BASE_URL}images/icon-user.png`} alt="user icon" />
      </div>

      <div className={styles.settings}>
        <img src={`${BASE_URL}images/icon-settings.png`} alt="settings icon" />
      </div>
    </div>
  )
}
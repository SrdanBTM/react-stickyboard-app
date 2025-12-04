

import styles from './datedMenuIcon.module.css'


export default function DatedMenuIcon() {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container}>
      <img src={`${BASE_URL}images/icon-down-arrow1.png`} alt='down arrow' />
    </div>
  )
}
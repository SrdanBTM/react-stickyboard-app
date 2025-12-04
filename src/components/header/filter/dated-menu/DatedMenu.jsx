

import styles from './datedMenu.module.css'


export default function DatedMenu() {
  return (
    <div className={styles.container}>
      <ul>
        <li>Next 3 Days</li>
        <li>Next 10 Days</li>
        <li>Next 30 Days</li>
      </ul>
    </div>
  )
}


import styles from './title.module.css'


export default function Title({ title }) {
  return (
    <div className={styles.container}>
      <span>{title}</span>
    </div>
  )
}
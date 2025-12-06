

import styles from './mainModalWrapper.module.css'


export default function MainModalWrapper({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
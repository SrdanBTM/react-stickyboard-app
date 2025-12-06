

import styles from './mainModalContentWrapper.module.css'


export default function MainModalContentWrapper({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
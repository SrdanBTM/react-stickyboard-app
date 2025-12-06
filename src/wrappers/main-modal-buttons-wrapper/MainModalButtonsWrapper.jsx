

import styles from './mainModalButtonsWrapper.module.css'


export default function MainModalButtonsWrapper({ children }) {

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
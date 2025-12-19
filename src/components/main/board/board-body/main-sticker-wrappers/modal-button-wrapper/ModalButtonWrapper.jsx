

import styles from './ModalButtonWrapper.module.css'


export default function ModalButtonWrapper({ children }) {


  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
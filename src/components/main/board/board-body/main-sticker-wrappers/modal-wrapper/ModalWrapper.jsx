

import styles from './modalWrapper.module.css'


export default function ModalWrapper({ children, mappedSticker }) {


  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker.color
      }}
    >
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
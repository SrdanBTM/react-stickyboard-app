

import styles from './footerButtonWrapper.module.css'


export default function FooterButtonWrapper({ children, currentModal, mappedSticker }) {

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker[currentModal] ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.35)'
      }}
    >
      {children}
    </div>
  )
}
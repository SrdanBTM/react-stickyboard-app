

import styles from './message.module.css'


export default function Message({ mappedSticker, messageText }) {

  return (
    <div
      className={styles.container}
      style={{
        color: mappedSticker.isDateTimeValid === false ? 'var(--font-danger)' : 'var(--font-primary)'
      }}
    >
      <span>{messageText}</span>
    </div>
  )
}



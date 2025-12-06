

import styles from './mainModal.module.css'


export default function MainModal() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.messages}>
          {messages.map((message, index) => <p key={index}>{message}</p>)}
        </div>

        <div className={styles.buttons}>
          {buttons.map((button, index) => <button>{button.title}</button>)}
        </div>

      </div>
    </div>
  )
}
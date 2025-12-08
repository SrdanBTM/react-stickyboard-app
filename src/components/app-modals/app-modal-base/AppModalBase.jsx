

import styles from './appModalBase.module.css'


export default function AppModalBase({ messages, buttons }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.messages}>
          {messages.map((msg, index) => <p key={index}>{msg}</p>)}
        </div>

        <div className={styles.buttons}>
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={styles.button}
              onClick={btn.onClick}
            >
              {btn.title}
            </button>)
          )}
        </div>

      </div>
    </div>
  )
}
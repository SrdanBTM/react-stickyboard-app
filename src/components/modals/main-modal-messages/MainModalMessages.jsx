

import styles from './mainModalMessages.module.css'


export default function MainModalMessages({ messages }) {

  return (
    <div className={styles.container}>
      {messages.map((message, index) => <p key={index}>{message}</p>)}
    </div>
  )
}
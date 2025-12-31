

import styles from './appModalBase.module.css'
import { motion } from 'framer-motion'


export default function AppModalBase({ messages, buttons }) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: 'easeOut'}}
    >
      <div className={styles.content}>

        <div className={styles.messages}>
          {messages.map((msg, index) => <p key={index}>{msg}</p>)}
        </div>

        <div className={styles.buttons}>
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`${styles.button} ${btn.title === 'Delete' ? styles.danger : ''} `}
              onClick={btn.onClick}
            >
              {btn.title}
            </button>)
          )}
        </div>

      </div>
    </motion.div>
  )
}
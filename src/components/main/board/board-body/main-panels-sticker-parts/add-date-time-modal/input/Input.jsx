

import styles from './input.module.css'


export default function Input({ placeholder }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        maxLength={2}
        placeholder={placeholder}
      />
    </div>

  )
}



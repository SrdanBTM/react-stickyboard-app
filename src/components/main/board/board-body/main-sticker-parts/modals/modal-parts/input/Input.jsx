

import styles from './input.module.css'


export default function Input({ placeholder, handleChange, inputName, value }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        maxLength={2}
        placeholder={placeholder}
        onChange={(e) => handleChange(inputName, e)}
        value={value}
      />
    </div>

  )
}



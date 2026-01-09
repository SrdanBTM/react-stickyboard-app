

import styles from './input.module.css'


export default function Input({ placeholder, handleChange, inputName, value, inputRef }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        maxLength={2}
        placeholder={placeholder}
        onChange={(e) => handleChange(inputName, e)}
        value={value}
        ref={inputRef}
      />
    </div>

  )
}



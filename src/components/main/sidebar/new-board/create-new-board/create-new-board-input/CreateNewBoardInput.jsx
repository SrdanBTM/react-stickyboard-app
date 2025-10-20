

import styles from './createNewBoardInput.module.css'



export default function CreateNewBoardInput({ inputRef, inputValue, handleKeyDown, handleChange }) {

  return (
    <input
      type='text'
      className={styles.input}
      value={inputValue}
      ref={inputRef}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  )
}
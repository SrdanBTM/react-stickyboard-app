

import styles from './stickerTitle.module.css'
import { useState } from 'react'


export default function StickerHeader() {

  const [inputValue, setInputValue] = useState('')


  function handleChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
} 
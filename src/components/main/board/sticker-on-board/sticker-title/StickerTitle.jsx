

import styles from './stickerTitle.module.css'
import { useState } from 'react'


export default function StickerHeader() {

  const [inputValue, setInputValue] = useState('')
  const [isInput, setIsInput] = useState(true)


  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') setIsInput(false)
  }

  function handleDoubleClick() {
    setIsInput(true)
  }

  
  return (
    <div
      className={styles.container}
      onDoubleClick={handleDoubleClick}
    >

      {isInput

        ? <div className={styles.input}>
          <input
            type="text"
            placeholder="Title..."
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        : <div className={styles.span}>
          <span>
            {inputValue}
          </span>
        </div>
      }
    </div>
  )
} 


import styles from './stickerNote.module.css'
import { useState } from 'react'

export default function StickerNote() {

  const [textareaValue, setTextareaValue] = useState('')


  function handleChange(e) {
    setTextareaValue(e.target.value)
  }

  function handleDoubleClick() {
    setIsTextarea(true)
  }


  return (
    <div
      className={styles.container}
      onDoubleClick={handleDoubleClick}
    >
      <div className={styles.textarea}>
        <textarea
          placeholder='Note...'
          value={textareaValue}
          onChange={handleChange}
        >
        </textarea>
      </div>
    </div>
  )
}
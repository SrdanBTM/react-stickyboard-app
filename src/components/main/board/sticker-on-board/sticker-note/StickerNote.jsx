

import styles from './stickerNote.module.css'
import { useState } from 'react'

export default function StickerNote() {

  const [textareaValue, setTextareaValue] = useState('')
  const [isTextarea, setIsTextarea] = useState(true)


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

      {isTextarea

        ? <div className={styles.textarea}>
          <textarea
            placeholder='Note...'
            value={textareaValue}
            onChange={handleChange}
          >
          </textarea>
        </div>

        : <div className={styles.span}>
          <span>
            {textareaValue}
          </span>
        </div>
      }

    </div>
  )
}


import styles from './title.module.css'
import { useContext, useRef, useEffect } from 'react'
import { MainContext } from '../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function Title({ mappedSticker }) {

  const { setBoards, currentBoardId, lastCreatedStickerId } = useContext(MainContext)
  const inputRef = useRef()



  function handleChange(e) {
    const currentStickerId = mappedSticker.stickerId
    const propertyToUpdate = { key: 'title', value: e.target.value }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  useEffect(() => {
    if (mappedSticker.stickerId === lastCreatedStickerId) {
      inputRef.current.focus()
    }
  }, [lastCreatedStickerId])
  

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title..."
        value={mappedSticker.title}
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  )
} 
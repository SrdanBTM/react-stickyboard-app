

import styles from './note.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function Note({ mappedSticker, isHover}) {

  const { setBoards, currentBoardId } = useContext(MainContext)


  function handleChange(e) {
    const currentStickerId = mappedSticker.stickerId
    const propertyToUpdate = { key: 'note', value: e.target.value }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  return (
    <div
      className={`
        ${styles.container} 
        ${mappedSticker.date && mappedSticker.time && mappedSticker.isHover ? styles.shadowTopBottom : ''}
        ${!mappedSticker.date && !mappedSticker.time && mappedSticker.isHover ? styles.shadowBottom : ''}
        `}
    >
      <div className={`${styles.textarea} ${isHover ? styles.addPaddingBottom : ''}`}>
        <textarea
          className='scroll'
          placeholder='Note...'
          value={mappedSticker.note}
          onChange={handleChange}
        >
        </textarea>
      </div>
    </div>
  )
}
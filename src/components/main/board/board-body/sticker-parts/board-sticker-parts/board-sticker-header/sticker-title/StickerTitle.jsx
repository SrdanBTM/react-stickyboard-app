

import styles from './stickerTitle.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function StickerTitle({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)


  function handleChange(e) {
    const currentStickerId = mappedSticker.stickerId
    const propertyToUpdate = { key: 'title', value: e.target.value }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title..."
        value={mappedSticker.title}
        onChange={handleChange}
      />
    </div>
  )
} 
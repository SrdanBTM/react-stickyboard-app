

import styles from './stickerCheck.module.css'
import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'

export default function StickerCheck({ mappedSticker }) {

  const BASE_URL = import.meta.env.BASE_URL
  const [isChecked, setIsChecked] = useState(false)
  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)


  const checked = `${BASE_URL}images/checked3.png`
  const unchecked = `${BASE_URL}images/checked4.png`


  function handleClick() {
    setIsChecked(true)
  }


  useEffect(() => {
    setTimeout(() => {
      const currentStickerId = mappedSticker.stickerId
      const propertyToUpdate = { key: 'checked', value: isChecked }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
    }, 500)
  }, [isChecked])


  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      <img src={isChecked ? checked : unchecked} alt="check sticker" />
    </div>
  )
}
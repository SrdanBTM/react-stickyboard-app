

import styles from './check.module.css'
import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'

export default function Check({ mappedSticker }) {

  const BASE_URL = import.meta.env.BASE_URL
  const [isChecked, setIsChecked] = useState(false)
  const { setCheckedStickerId, checkedOrderCounter, setCheckedOrderCounter, updateSticker, setBoards, currentBoardId } = useContext(MainContext)


  const checked = `${BASE_URL}images/checked3.png`
  const unchecked = `${BASE_URL}images/checked4.png`


  function handleClick() {
    setIsChecked(true)
    setCheckedOrderCounter(prev => prev + 1)
    setCheckedStickerId(mappedSticker.stickerId)
  }


  useEffect(() => {
    setTimeout(() => {
      const currentStickerId = mappedSticker.stickerId
      const propertyToUpdate1 = { key: 'checked', value: isChecked }
      const propertyToUpdate2 = { key: 'checkedOrder', value: checkedOrderCounter }
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
      updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
      setCheckedStickerId(null)
    }, 200)
  }, [isChecked])


  return (
    <div
      className={styles.container}
      onClick={handleClick}
      style={{
        opacity: mappedSticker.isHover ? 1 : 0
      }}
    >
      <img src={isChecked ? checked : unchecked} alt="check sticker" />
    </div>
  )
}
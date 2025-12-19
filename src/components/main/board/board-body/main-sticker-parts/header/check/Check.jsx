

import styles from './check.module.css'
import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function Check({ mappedSticker, isHover }) {

  const BASE_URL = import.meta.env.BASE_URL
  const [isChecked, setIsChecked] = useState(false)

  const { setCheckedStickerId, setBoards, currentBoardId, checkedOrderCounter, setCheckedOrderCounter } = useContext(MainContext)


  const checked = `${BASE_URL}images/checked3.png`
  const unchecked = `${BASE_URL}images/checked4.png`


  function handleClick() {
    setIsChecked(true)
    setCheckedOrderCounter(prev => prev + 1)
    setCheckedStickerId(mappedSticker.stickerId)
  }


  useEffect(() => {
    const currentStickerId = mappedSticker.stickerId
    const propertyToUpdate1 = { key: 'checked', value: isChecked }
    const propertyToUpdate2 = { key: 'checkedOrder', value: checkedOrderCounter }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
    setCheckedStickerId(null)
  }, [isChecked])


  return (
    <div
      className={styles.container}
      onClick={handleClick}
      style={{
        opacity: isHover ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    >
      <img src={isChecked ? checked : unchecked} alt="check sticker" />
    </div>
  )
}
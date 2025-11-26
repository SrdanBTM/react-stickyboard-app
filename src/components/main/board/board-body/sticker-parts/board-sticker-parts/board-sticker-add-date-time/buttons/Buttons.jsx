

import styles from './buttons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Buttons({ mappedSticker }) {

  const { boards, updateSticker, setBoards, currentBoardId, setIsAddDateOpen, dayInWeek, validatedValueDate, validatedValueTime, setValidatedValueDate, setValidatedValueTime, setInputValueDate, setInputValueTime } = useContext(MainContext)


  function handleClickSave() {
    setIsAddDateOpen(null)

    const currentStickerId = mappedSticker.stickerId
    const propertyToUpdate1 = { key: 'scheduledDate', value: validatedValueDate }
    const propertyToUpdate2 = { key: 'scheduledTime', value: validatedValueTime }
    const propertyToUpdate3 = { key: 'scheduledDayInWeek', value: dayInWeek }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
  }


  function handleClickClose() {
    setIsAddDateOpen(null)
    setValidatedValueDate('init')
    setValidatedValueTime('init')
    setInputValueDate('')
    setInputValueTime('')
  }


  return (
    <div className={styles.container}>
      <button
        className={styles.saveButton}
        onClick={handleClickSave}
      >
        Save
      </button>

      <button
        className={styles.closeButton}
        onClick={handleClickClose}
      >
        Close
      </button>
    </div>
  )
}

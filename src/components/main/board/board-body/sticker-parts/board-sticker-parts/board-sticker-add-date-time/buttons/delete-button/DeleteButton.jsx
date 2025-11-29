

import styles from './deleteButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function DeleteButton({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    const propertyToUpdate1 = { key: 'isDateTimeValid', value: null }
    const propertyToUpdate2 = { key: 'isDateValid', value: false }
    const propertyToUpdate3 = { key: 'isTimeValid', value: false }
    const propertyToUpdate4 = { key: 'date', value: null }
    const propertyToUpdate5 = { key: 'time', value: null }
    const propertyToUpdate6 = { key: 'dayInWeek', value: null }
    const propertyToUpdate7 = { key: 'isAddDateTimeOpened', value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate5)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate6)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate7)
  }


  return (
    <button
      className={styles.container}
      onClick={handleClick}
    >
      <img src={`${BASE_URL}images/icon-delete5.png`} alt="save" />
    </button>
  )
}
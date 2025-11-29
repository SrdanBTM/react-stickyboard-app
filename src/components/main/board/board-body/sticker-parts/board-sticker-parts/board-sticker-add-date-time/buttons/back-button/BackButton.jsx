

import styles from './backButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function BackButton({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    const propertyToUpdate = { key: 'isAddDateTimeOpen', value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  return (
    <button
      className={styles.container}
      onClick={handleClick}
    >
      <img src={`${BASE_URL}images/icon-back1.png`} alt="save" />
    </button>
  )
}
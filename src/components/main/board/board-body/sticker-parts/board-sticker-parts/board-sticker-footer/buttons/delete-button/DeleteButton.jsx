


import styles from './deleteButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function DeleteButton({ mappedSticker }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function handleClick(e) {
    const propertyToUpdate = { key: 'isDeleteOpen', value: true }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  return (
    <button
      className={styles.container}
      onClick={handleClick}
    >
      <img src={`${BASE_URL}images/icon-delete5.png`} alt="delete" />
    </button>
  )
}
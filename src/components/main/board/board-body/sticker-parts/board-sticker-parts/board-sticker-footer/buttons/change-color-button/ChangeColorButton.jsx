


import styles from './changeColorButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function ChangeColorButton({ mappedSticker }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { setBoards, updateSticker, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function handleClick() {
    const propertyToUpdate = { key: 'isChangeColorOpen', value: true }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  return (
    <button
      className={styles.container}
      onClick={handleClick}
    >
      <img src={`${BASE_URL}images/icon-palette1.png`} alt="change color" />
    </button>
  )
}
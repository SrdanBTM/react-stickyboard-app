

import styles from './addDateButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function AddDateIcon({ mappedSticker }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { setBoards, updateSticker, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function handleClick() {
    const propertyToUpdate = {key: 'isAddDateTimeOpened', value: true}
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      <div className={styles.image}>
        <img src={`${BASE_URL}images/icon-date2.png`} alt="add date" />
      </div>
    </div>
  )
}
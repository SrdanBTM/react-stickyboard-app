

import styles from './addDate.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function AddDate({ mappedSticker }) {

  const { isAddDateOpen, setIsAddDateOpen } = useContext(MainContext)


  function handleClickSave() {
    setIsAddDateOpen(false)
  }


  function handleClickClose() {
    setIsAddDateOpen(false)
  }


  return (
    <div
      className={styles.container}
      style={{
        transform: isAddDateOpen === mappedSticker.stickerId ? 'scale(1)' : 'scale(0)',
        transition: 'transform 0.3s ease',
        backgroundColor: mappedSticker.color
      }}
    >
      <div className={styles.content}>
        <div className={styles.inputs}>
          <input type="text" placeholder='Write date' />
          <input type="text" placeholder='Write time' />
        </div>

        <span>22.11.2025  |  Saturday  |  10:31</span>

        <div className={styles.buttons}>
          <button
            className={styles.saveButton}
            onClick={handleClickSave}
          >
            SAVE
          </button>

          <button
            className={styles.closeButton}
            onClick={handleClickClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}
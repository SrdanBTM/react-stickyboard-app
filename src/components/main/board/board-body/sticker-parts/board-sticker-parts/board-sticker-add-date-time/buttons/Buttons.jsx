

import styles from './buttons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Buttons() {

  const { setIsAddDateOpen } = useContext(MainContext)


  function handleClickSave() {
    setIsAddDateOpen(null)
  }


  function handleClickClose() {
    setIsAddDateOpen(null)
  }


  return (
    <div className={styles.container}>
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
        Close
      </button>
    </div>
  )
}

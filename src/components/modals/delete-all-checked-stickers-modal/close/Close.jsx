

import styles from './close.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'


export default function Close() {

  const { setIsDeleteAllCheckedStickersModalOpen } = useContext(MainContext)

  function handleClick(e) {
    setIsDeleteAllCheckedStickersModalOpen(false)
  }

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      Close
    </button>
  )
}
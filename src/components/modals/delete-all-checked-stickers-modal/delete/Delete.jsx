

import styles from './delete.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'

export default function Delete() {

  const { setIsDeleteAllCheckedStickersModalOpen, deleteAllCheckedStickers, setBoards } = useContext(MainContext)

  function handleClick() {
    setIsDeleteAllCheckedStickersModalOpen(false)
    deleteAllCheckedStickers(setBoards)
  }

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      Delete
    </button>
  )
}


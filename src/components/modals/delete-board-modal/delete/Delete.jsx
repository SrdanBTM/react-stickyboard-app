

import styles from './delete.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'

export default function Delete() {

  const { currentBoardId, setIsDeleteBoardModalOpen, setBoards } = useContext(MainContext)

  function handleClick() {
    setIsDeleteBoardModalOpen(false)
    setBoards(prev => prev.filter(board => board.boardId !== currentBoardId))
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


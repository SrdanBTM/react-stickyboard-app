

import styles from './delete.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'

export default function Delete() {

  const { setCurrentBoardId, currentBoardId, setIsDeleteBoardModalOpen, boards, setBoards } = useContext(MainContext)

  function handleClick() {
    setIsDeleteBoardModalOpen(false)
    setBoards(prev => {
      const filtered = prev.filter(board => board.boardId !== currentBoardId)

      if (filtered.length > 0) {
        setCurrentBoardId(filtered[filtered.length - 1].boardId)
      } else {
        setCurrentBoardId(null)
      }

      return filtered
    })
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


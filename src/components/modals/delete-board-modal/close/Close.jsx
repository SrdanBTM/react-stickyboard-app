

import styles from './close.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'


export default function Close() {

  const { setIsDeleteBoardModalOpen, setBoards, currentBoardId } = useContext(MainContext)

  function handleClick(e) {
    setIsDeleteBoardModalOpen(false)
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? { ...board, isDeleteShowed: false }
          : board
      )
    }))
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
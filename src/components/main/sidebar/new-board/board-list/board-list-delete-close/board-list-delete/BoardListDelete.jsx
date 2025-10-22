


import styles from './boardListDelete.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function BoardListDelete({ board }) {

  const { boards, setBoards, setCurrentBoardId } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick(e) {
    const dataId = e.currentTarget.getAttribute('data-id')

    boards.length > 1
      ? setCurrentBoardId(boards[0].boardId)
      : setCurrentBoardId(null)

    setBoards(prev => prev.map(board => {
      return (
        board.boardId === dataId
          ? { ...board, isDeletedShowed: false }
          : board
      )
    }))

    setBoards(prev => prev.filter(board => board.boardId !== dataId && board))
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
      data-id={board.boardId}
    >
      <img src={`${BASE_URL}images/icon-delete1.png`} alt="delete" />
    </div>
  )
}
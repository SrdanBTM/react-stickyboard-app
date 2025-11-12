


import styles from './boardListDelete.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function BoardListDelete({ board }) {

  const { deleteBoard, updateBoard, theme, boards, setBoards, setCurrentBoardId, setIsDeleteBoardModalOpen } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick(e) {
    boards.length >= 1
      ? setCurrentBoardId(boards[0].boardId)
      : setCurrentBoardId(null)

    const currentBoardId = e.currentTarget.getAttribute('data-id')
    const propertyToUpdate = {key: 'isDeleteShowed', value: false}
    updateBoard(setBoards, currentBoardId, propertyToUpdate)

    board.stickers.length === 0
      ? deleteBoard(setBoards, currentBoardId)
      : setIsDeleteBoardModalOpen(true)
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
      data-id={board.boardId}
    >
      {theme === 'darkTheme'
        ? <img src={`${BASE_URL}images/icon-delete1.png`} alt="delete" />
        : <img src={`${BASE_URL}images/icon-delete2.png`} alt="delete" />}
    </div>
  )
}
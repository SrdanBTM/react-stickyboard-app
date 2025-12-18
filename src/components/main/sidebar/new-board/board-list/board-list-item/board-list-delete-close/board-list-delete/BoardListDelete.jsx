


import styles from './boardListDelete.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../../../../../../contexts/AppModalsContext.jsx'
import { ThemeContext } from '../../../../../../../../contexts/ThemeContext.jsx'
import { deleteBoard } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'
import { updateBoard } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function BoardListDelete({ mappedBoard }) {

  const { setBoards } = useContext(MainContext)
  const { theme } = useContext(ThemeContext)
  const { setOpenedAppModal } = useContext(AppModalsContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick(e) {
    const currentBoardId = e.currentTarget.getAttribute('data-id')
    const propertyToUpdate = { key: 'isDeleteShowed', value: false }
    updateBoard(setBoards, currentBoardId, propertyToUpdate)

    mappedBoard.stickers.length === 0
      ? deleteBoard(setBoards, currentBoardId)
      : setOpenedAppModal('DeleteBoardModal')
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
      data-id={mappedBoard.boardId}
    >
      {theme === 'darkTheme'
        ? <img src={`${BASE_URL}images/icon-delete1.png`} alt="delete" />
        : <img src={`${BASE_URL}images/icon-delete2.png`} alt="delete" />}
    </div>
  )
}
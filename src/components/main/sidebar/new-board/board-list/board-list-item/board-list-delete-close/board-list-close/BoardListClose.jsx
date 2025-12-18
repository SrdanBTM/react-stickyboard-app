

import styles from './boardListClose.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { ThemeContext } from '../../../../../../../../contexts/ThemeContext.jsx'
import { updateBoard } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function BoardListClose({ mappedBoard }) {

  const { setBoards } = useContext(MainContext)
  const { theme } = useContext(ThemeContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick(e) {
    const currentBoardId = e.currentTarget.getAttribute('data-id')
    const propertyToUpdate = { key: 'isDeleteShowed', value: false }
    updateBoard(setBoards, currentBoardId, propertyToUpdate)
  }

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      data-id={mappedBoard.boardId}
    >
      {theme === 'darkTheme'
        ? <img src={`${BASE_URL}images/icon-close1.png`} alt="close" />
        : <img src={`${BASE_URL}images/icon-close2.png`} alt="close" />}
    </div>
  )
}
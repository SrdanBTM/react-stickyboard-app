

import styles from './boardListClose.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'

export default function BoardListClose({ board }) {

  const { setBoards, theme } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick(e) {
    const dataId = e.currentTarget.getAttribute('data-id')
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === dataId
          ? { ...board, isDeleteShowed: false }
          : board
      )
    }))

  }

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      data-id={board.boardId}
    >
      {theme === 'darkTheme'
        ? <img src={`${BASE_URL}images/icon-close1.png`} alt="close" />
        : <img src={`${BASE_URL}images/icon-close2.png`} alt="close" />}
    </div>
  )
}
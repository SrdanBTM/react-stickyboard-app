

import styles from './boardNameDelete.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function boardNameDots({ board }) {

  const { setBoards, theme } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL



  function handleClick(e) {
    const dataId = e.currentTarget.getAttribute('data-id')
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === dataId
          ? { ...board, isDeleteShowed: !board.isDeleteShowed }
          : { ...board, isDeleteShowed: false }
      )
    })
    )
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
      data-id={board.boardId}
    >
      {}
      <img src={
        theme === 'darkTheme'
          ? `${BASE_URL}images/icon-delete2.png`
          : `${BASE_URL}images/icon-delete1.png`}
        alt="edit" />
    </div>
  )
}
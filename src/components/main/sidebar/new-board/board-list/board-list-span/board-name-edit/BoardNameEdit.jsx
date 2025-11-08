

import styles from './boardNameEdit.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider'


export default function BoardNameEdit() {

  const { theme, setCurrentBoardId, setBoards } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick(e) {
    const dataIdBoard = e.currentTarget.parentElement.parentElement.getAttribute('data-id')
    setBoards(prev => {
      return (
        prev.map(board => {
          return (
            board.boardId === dataIdBoard
              ? { ...board, isInput: true, isFocused: true }
              : { ...board, isInput: false, isFocused: false }
          )
        })
      )
    })
    setCurrentBoardId(dataIdBoard)
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      <img src={
        theme === 'darkTheme'
          ? `${BASE_URL}images/icon-edit2.png`
          : `${BASE_URL}images/icon-edit1.png`}
        alt="edit"
        data-id={'boardNameEdit'}
        />
    </div>
  )
}


import styles from './boardNameEdit.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider'


export default function BoardsListEdit() {

  const { theme, setCurrentName, setBoards } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick(e) {
    const dataName = e.currentTarget.parentElement.parentElement.getAttribute('data-name')
    setCurrentName(dataName)
    setBoards(prev => {
      return (
        prev.map(board => {
          return (
            board.boardName === dataName
              ? { ...board, isInput: true, isFocused: true }
              : { ...board, isInput: false, isFocused: false }
          )
        })
      )
    })
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
        alt="edit" />
    </div>
  )
}
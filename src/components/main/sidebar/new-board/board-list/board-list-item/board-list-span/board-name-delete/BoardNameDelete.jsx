

import styles from './boardNameDelete.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { ThemeContext } from '../../../../../../../../contexts/ThemeContext.jsx'
import { updateAllBoards } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function boardNameDots({ mappedBoard }) {

  const { setBoards } = useContext(MainContext)
  const { theme } = useContext(ThemeContext)
  const BASE_URL = import.meta.env.BASE_URL



  function handleClick(e) {
    const currentBoardId = e.currentTarget.getAttribute('data-id')
    const propertyTernaryPair = [
      { keyTrue: 'isDeleteShowed', valueTrue: !mappedBoard.isDeleteShowed },
      { keyFalse: 'isDeleteShowed', valueFalse: false }
    ]
    updateAllBoards(setBoards, currentBoardId, propertyTernaryPair)
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
      data-id={mappedBoard.boardId}
    >
      { }
      <img src={
        theme === 'darkTheme'
          ? `${BASE_URL}images/icon-delete2.png`
          : `${BASE_URL}images/icon-delete1.png`}
        alt="edit" />
    </div>
  )
}
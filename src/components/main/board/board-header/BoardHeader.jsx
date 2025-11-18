

import styles from './boardHeader.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'


export default function BoardHeader() {

  const { isSearchResultBoard, currentBoardId, boards } = useContext(MainContext)

  const currentBoard =
  boards.length > 0
    ? boards.find(board => board.boardId === currentBoardId)
    : null


  return (
    <div className={styles.container}>
      {isSearchResultBoard
        ? <span>Search results</span>
        : currentBoard && <span>{currentBoard.boardName}</span>
      }
    </div>
  )
}
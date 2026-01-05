

import styles from './boardHeader.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../contexts/MainContext.jsx'


export default function BoardHeader() {

  const { currentBoardPanel, currentBoardId, boards, datedNextDaysValue, searchValue } = useContext(MainContext)

  const currentBoard =
    boards.length > 0
      ? boards.find(board => board.boardId === currentBoardId)
      : null


  let title = null

  if (currentBoardPanel === 'board' && currentBoardId !== null) {
    title = currentBoard.boardName
  } else if (currentBoardPanel === 'search') {
    title = `Search results   ·  ${searchValue}`
  } else if (currentBoardPanel === 'filter' && typeof datedNextDaysValue === 'number') {
    title = `Stickers due in the next ${datedNextDaysValue} days`
  } else if (currentBoardPanel === 'filter' && datedNextDaysValue === 'all') {
    title = `All dated stickers`
  }


  return (
    <div className={styles.container}>
      <span>{title}</span>
    </div>
  )
}


import styles from './boardListItem.module.css'
import { useContext } from 'react'
import { ClickOutsideElementContext } from '../../../../../../contexts/ClickOutsideElementContext.jsx'
import { MainContext } from '../../../../../../contexts/MainContext.jsx'
import Input from './board-list-item-elements/BoardListItemInput.jsx'
import Name from './board-list-item-elements/BoardListItemName.jsx'


export default function BoardListItem({ mappedBoard }) {

  const { isClickedOutsideBoardList } = useContext(ClickOutsideElementContext)
  const { currentBoardId } = useContext(MainContext)



  return (
    <li
      className={`
        ${styles.container} 
        ${mappedBoard.boardId === currentBoardId ? styles.selected : styles.noSelected}
        `}
    >
      {mappedBoard.isInput && !isClickedOutsideBoardList
        ? <Input mappedBoard={mappedBoard} />
        : <Name mappedBoard={mappedBoard} />
      }
    </li>
  )
}
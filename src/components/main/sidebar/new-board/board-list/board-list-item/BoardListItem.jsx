

import styles from './boardListItem.module.css'
import { useContext, useRef, useEffect } from 'react'
import { ClickOutsideElementContext } from '../../../../../../contexts/ClickOutsideElementContext.jsx'
import { MainContext } from '../../../../../../contexts/MainContext.jsx'
import Input from './board-list-item-elements/BoardListItemInput.jsx'
import Name from './board-list-item-elements/BoardListItemName.jsx'


export default function BoardListItem({ mappedBoard }) {

  const { isClickedOutsideBoardList } = useContext(ClickOutsideElementContext)
  const { currentBoardId } = useContext(MainContext)
  const itemRef = useRef(null)


  useEffect(() => {
    if (itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }, [currentBoardId])


  return (
    <li
      className={`
        ${styles.container} 
        ${mappedBoard.boardId === currentBoardId ? styles.selected : styles.noSelected}
        `}
      ref={mappedBoard.boardId === currentBoardId ? itemRef : null}
    >
      {mappedBoard.isInput && !isClickedOutsideBoardList
        ? <Input mappedBoard={mappedBoard} />
        : <Name mappedBoard={mappedBoard} />
      }
    </li>
  )
}
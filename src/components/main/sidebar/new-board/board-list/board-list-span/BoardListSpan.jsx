

import styles from './boardListSpan.module.css'
import { useContext, useState } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import Edit from './board-name-edit/BoardNameEdit.jsx'
import Dots from './board-name-dots/BoardNameDots.jsx'


export default function BoardListSpan({ board }) {

  const { boards, currentBoard, setCurrentBoard } = useContext(MainContext)
  const [isMouseOver, setIsMouseOver] = useState(false)


  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseLeave() {
    setIsMouseOver(false)
  }

  function handleClick(e) {
    const selected = boards.find(board => board.boardName === e.currentTarget.getAttribute('data-name'))
    setCurrentBoard(selected)
  }


  return (
    <div
      className={styles.container}
      data-name={board.boardName}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{ border: currentBoard.boardName === board.boardName ? '1px solid var(--border-color)' : '' }}
    >
      <span>{board.boardName}</span>
      <div className={styles.editAndDots}>
        {isMouseOver &&
          <>
            <Edit />
            <Dots />
          </>
        }
      </div>

    </div>
  )
}
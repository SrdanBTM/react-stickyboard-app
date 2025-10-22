

import styles from './boardListSpan.module.css'
import { useContext, useState } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import Edit from './board-name-edit/BoardNameEdit.jsx'
import Dots from './board-name-dots/BoardNameDots.jsx'


export default function BoardListSpan({ board }) {

  const { currentBoardId, setCurrentBoardId } = useContext(MainContext)
  const [isMouseOver, setIsMouseOver] = useState(false)


  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseLeave() {
    setIsMouseOver(false)
  }

  function handleClick(e) {
    const dataId =  e.currentTarget.getAttribute('data-id')
    setCurrentBoardId(dataId)
  }


  return (
    <div
      className={styles.container}
      data-id={board.boardId}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{ border: board.boardId === currentBoardId ? '1px solid var(--border-color)' : '' }}
    >
      <span>{board.boardName}</span>
      <div className={styles.editAndDots}>
        {isMouseOver &&
          <>
            <Edit boardId={board.boardId} />
            <Dots boardId={board.boardId} />
          </>
        }
      </div>

    </div>
  )
}


import styles from './boardListSpan.module.css'
import { useContext, useState } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import Edit from './board-name-edit/BoardNameEdit.jsx'
import Delete from './board-name-delete/BoardNameDelete.jsx'


export default function BoardListSpan({ board }) {

  const { setIsSearchResultBoard, setCurrentBoardId, setSearchValue} = useContext(MainContext)
  const [isMouseOver, setIsMouseOver] = useState(false)


  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseLeave() {
    setIsMouseOver(false)
  }

  function handleClick(e) {
    const dataId = e.currentTarget.getAttribute('data-id')
    setCurrentBoardId(dataId)
    setIsSearchResultBoard(false)
    setSearchValue('')
  }


  return (
    <div
      className={styles.container}
      data-id={board.boardId}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <span>{board.boardName}</span>
      <div className={styles.editAndDots}>
        {isMouseOver && !board.isDeleteShowed &&
          <>
            <Edit board={board} />
            <Delete board={board} />
          </>
        }
      </div>

    </div>
  )
}
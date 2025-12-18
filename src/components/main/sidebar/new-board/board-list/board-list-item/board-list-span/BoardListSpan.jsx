

import styles from './boardListSpan.module.css'
import { useContext, useState } from 'react'
import { MainContext } from '../../../../../../../contexts/MainContext.jsx'
import Edit from './board-name-edit/BoardNameEdit.jsx'
import Delete from './board-name-delete/BoardNameDelete.jsx'


export default function BoardListSpan({ mappedBoard }) {

  const { setCurrentBoardPanel, setCurrentBoardId, setSearchValue, setSelectedFilterButton } = useContext(MainContext)
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
    setSearchValue('')
    setCurrentBoardPanel('board')
    setSelectedFilterButton(null)
  }


  return (
    <div
      className={styles.container}
      data-id={mappedBoard.boardId}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <span>{mappedBoard.boardName}</span>
      <div className={styles.editAndDots}>
        {isMouseOver && !mappedBoard.isDeleteShowed &&
          <>
            <Edit />
            <Delete mappedBoard={mappedBoard} />
          </>
        }
      </div>

    </div>
  )
}
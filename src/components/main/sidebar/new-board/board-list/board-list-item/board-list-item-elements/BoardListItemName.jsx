

import styles from './boardListItemElements.module.css'
import { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../../../../../../contexts/MainContext.jsx'
import EditButton from './board-list-item-span-buttons/BoardListItemSpanButtonEdit.jsx'
import DeleteButton from './board-list-item-span-buttons/BoardListItemSpanButtonDelete.jsx'


export default function BoardListName({ mappedBoard }) {

  const { boards, setCurrentBoardPanel, currentBoardId, setCurrentBoardId, setSearchValue, setSelectedFilterButton, setIsBoardChanging } = useContext(MainContext)
  const [isMouseOver, setIsMouseOver] = useState(false)


  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseLeave() {
    setIsMouseOver(false)
  }

  function handleClick(e) {
    setCurrentBoardId(mappedBoard.boardId)
    setSearchValue('')
    setCurrentBoardPanel('board')
    setSelectedFilterButton(null)
    setIsBoardChanging(true)
  }

  useEffect(() => {
    setIsBoardChanging(false)
  }, [currentBoardId])


  return (
    <div
      className={`${styles.containerName} ${mappedBoard.boardId === currentBoardId ? styles.selected : ''}`}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.name}>
        {mappedBoard.boardName}
      </div>

      <div className={styles.buttons}>
        {isMouseOver &&
          <>
            <EditButton mappedBoard={mappedBoard} />
            <DeleteButton mappedBoard={mappedBoard} />
          </>
        }
      </div>

    </div>
  )
}
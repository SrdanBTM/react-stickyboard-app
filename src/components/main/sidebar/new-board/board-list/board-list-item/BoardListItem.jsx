

import styles from './boardListItem.module.css'
import { useContext } from 'react'
import { ClickOutsideElementContext } from '../../../../../../contexts/ClickOutsideElementContext.jsx'
import { MainContext } from '../../../../../../contexts/MainContext.jsx'
import Input from './board-list-input/BoardListInput.jsx'
import Span from './board-list-span/BoardListSpan.jsx'
import DeleteClose from './board-list-delete-close/BoardListDeleteClose.jsx'


export default function BoardListItem({ mappedBoard }) {

  const { isClickedOutsideBoardList } = useContext(ClickOutsideElementContext)
  const { currentBoardId } = useContext(MainContext)



  return (
    <div
      className={styles.container}
      style={{
        height: mappedBoard.isDeleteShowed ? '80px' : '37px',
        backgroundColor: mappedBoard.boardId === currentBoardId ? 'var(--board-bg-selected)' : '',
        border: mappedBoard.boardId === currentBoardId ? 'var(--board-border-selected)' : 'var(--border-transparent)',
        boxShadow: mappedBoard.boardId === currentBoardId ? 'var(--board-shadow-selected)' : ''
      }}

    >
      {mappedBoard.isInput && !isClickedOutsideBoardList
        ?
        <Input mappedBoard={mappedBoard} />
        :
        <>
          <DeleteClose mappedBoard={mappedBoard} />
          <Span mappedBoard={mappedBoard} />
        </>
      }
    </div>
  )
}
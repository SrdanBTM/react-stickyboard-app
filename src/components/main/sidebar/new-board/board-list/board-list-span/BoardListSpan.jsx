

import styles from './boardListSpan.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import Edit from './board-name-edit/BoardNameEdit.jsx'
import Dots from './board-name-dots/BoardNameDots.jsx'

export default function BoardListSpan({
  isMouseOver,
  setCurrentName,
  board,
  handleClickSpan,
  handleMouseOverSpan,
  handleMouseLeaveSpan
}) {

  const { currentBoard, setBoards } = useContext(MainContext)

  function handleClickEdit(e) {
    const dataName = e.currentTarget.parentElement.parentElement.getAttribute('data-name')
    setCurrentName(dataName)

    setBoards(prev => {
      return (
        prev.map(board => {
          return (
            board.boardName === dataName
              ? { ...board, isInput: true, isFocused: true }
              : { ...board, isInput: false, isFocused: false }
          )
        })
      )
    })
  }



  function handleClickDots() {
    console.log('radi');
  }



  return (
    <div
      className={styles.container}
      data-name={board.boardName}
      onClick={handleClickSpan}
      onMouseOver={handleMouseOverSpan}
      onMouseLeave={handleMouseLeaveSpan}
      style={{ border: currentBoard.boardName === board.boardName ? '1px solid var(--border-color)' : '' }}
    >
      <span>{board.boardName}</span>
      <div className={styles.editAndDots}>
        {isMouseOver &&
          <>
            <Edit handleClickEdit={handleClickEdit} />
            <Dots handleClickDots={handleClickDots} />
          </>
        }
      </div>

    </div>
  )
}
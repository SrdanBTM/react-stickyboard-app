

import styles from './createNewBoard.module.css'
import { useState, useEffect, useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import { ClickOutsideElementContext } from '../../../../../contexts/ClickOutsideElementContext.jsx' 
import Span from './create-new-board-span/CreateNewBoardSpan.jsx'
import Input from './create-new-board-input/CreateNewBoardInput.jsx'


export default function CreateNewBoard() {

  const { boards, setCurrentBoardId } = useContext(MainContext)
  const { isClickedOutsideNewBoard } = useContext(ClickOutsideElementContext)
  const [isCreateBoard, setIsCreateBoard] = useState(false)


  useEffect(() => {
    if (boards.length > 0) {
      const lastBoardId = boards[boards.length - 1].boardId
      setCurrentBoardId(lastBoardId)
    }
  }, [boards.length])


  function handleClick() {
    setIsCreateBoard(true)
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      {isCreateBoard && !isClickedOutsideNewBoard
        ? <Input
          isCreateBoard={isCreateBoard}
          setIsCreateBoard={setIsCreateBoard}
        />
        : <Span />
      }
    </div>
  )
}
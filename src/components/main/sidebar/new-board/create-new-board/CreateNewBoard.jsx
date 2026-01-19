

import styles from './createNewBoard.module.css'
import { useState, useEffect, useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import { ClickOutsideElementContext } from '../../../../../contexts/ClickOutsideElementContext.jsx'
import Button from './create-new-board-elements/CreateNewBoardButton.jsx'
import Input from './create-new-board-elements/CreateNewBoardInput.jsx'


export default function CreateNewBoard() {

  const { boards, currentBoardId, setCurrentBoardId, previousBoardIdRef, setSelectedFilterButton, setCurrentBoardPanel } = useContext(MainContext)
  const { isClickedOutsideNewBoard } = useContext(ClickOutsideElementContext)
  const [isCreateBoard, setIsCreateBoard] = useState(false)



  useEffect(() => {
    if (boards.length > 0 && !currentBoardId) {
      const lastBoardId = boards[boards.length - 1].boardId
      setCurrentBoardId(lastBoardId)
    }
  }, [boards.length])


  function handleClick() {
    setIsCreateBoard(true)
    setSelectedFilterButton(null)
    previousBoardIdRef.current = currentBoardId
    setCurrentBoardId(null)
    setCurrentBoardPanel('board')
  }


  useEffect(() => {
    if (isClickedOutsideNewBoard && currentBoardId === null) {
      setCurrentBoardId(previousBoardIdRef.current)
    }
  }, [isClickedOutsideNewBoard])


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
        : <Button />
      }
    </div>
  )
}


import styles from './createNewBoard.module.css'
import { useState, useEffect, useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import Span from './create-new-board-span/CreateNewBoardSpan.jsx'
import Input from './create-new-board-input/CreateNewBoardInput.jsx'


export default function CreateNewBoard() {

  const { boards, setCurrentBoard } = useContext(MainContext)
  const [isCreateBoard, setIsCreateBoard] = useState(false)


  useEffect(() => {
    const lastBoard = boards[boards.length - 1]
    setCurrentBoard(lastBoard)
  }, [boards])


  function handleClick() {
    setIsCreateBoard(true)
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      {isCreateBoard
        ? <Input
          isCreateBoard={isCreateBoard}
          setIsCreateBoard={setIsCreateBoard}
        />
        : <Span />
      }
    </div>
  )
}
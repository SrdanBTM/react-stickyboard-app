

import styles from './createNewBoard.module.css'
import { useContext, useState, useRef, useEffect } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import Span from './create-new-board-span/CreateNewBoardSpan.jsx'
import Input from './create-new-board-input/CreateNewBoardInput.jsx'

export default function CreateNewBoard() {

  const { setBoards, boardTemplate } = useContext(MainContext)

  const [isCreateBoard, setIsCreateBoard] = useState(false)
  const [inputValue, setInputValue] = useState('')



  // used for conditionally render (input or span)
  function handleClick() {
    setIsCreateBoard(true)
  }


  // focus on input
  const inputRef = useRef()
  useEffect(() => {
    isCreateBoard === true && inputRef.current.focus()
  }, [isCreateBoard])

  
  // update inputValue state with new input value
  function handleChange(e) {
    setInputValue(e.target.value)
  }


  // when key=enter => add new board template to boards
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setIsCreateBoard(false)

      setBoards(prev => {
        return (
          [
            ...prev,
            {
              ...boardTemplate,
              boardName: inputValue,
            }
          ]
        )
      })

      setInputValue('')
    }
  }




  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      {isCreateBoard
        ? <Input
          inputRef={inputRef}
          inputValue={inputValue}
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
        />
        : <Span />}
    </div>
  )
}
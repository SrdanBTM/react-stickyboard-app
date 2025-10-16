

import styles from './createNewBoard.module.css'
import { useContext, useState, useRef, useEffect } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'

export default function CreateNewBoard() {

  const { boards, setBoards, boardTemplate, currentBoard, setCurrentBoard } = useContext(MainContext)

  const [isCreateBoard, setIsCreateBoard] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const inputRef = useRef()

  const paragraf = <p>+ Create New Border</p>
  const input = <input
    type='text'
    onKeyDown={handleKeyDown}
    ref={inputRef}
    onChange={handleChange}
    value={inputValue}
  />

  


  useEffect(() => {
    isCreateBoard === true && inputRef.current.focus()
  }, [isCreateBoard])


  function handleClick() {
    setIsCreateBoard(true)
  }


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

  function handleChange(e) {
    setInputValue(e.target.value)
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      {isCreateBoard ? input : paragraf}
    </div>
  )
}
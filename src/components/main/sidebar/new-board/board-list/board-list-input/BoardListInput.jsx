

import styles from './boardListInput.module.css'
import { useContext, useRef, useEffect, useState } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function BoardListInput({ board }) {

  const { boards, setBoards, currentBoardId } = useContext(MainContext)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()

  
  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [boards])


  function handleChange(e) {
    setInputValue(e.target.value)
  }


  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setBoards(prev => {
        return (
          prev.map(board => {
            return (
              board.boardId === currentBoardId
                ? { ...board, isInput: false, boardName: inputValue }
                : board
            )
          })
        )
      })
    }
  }
  

  return (
    <div
      className={styles.container}
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    >
      <input
        type="text"
        ref={board.isFocused ? inputRef : null}
      />
    </div>
  )
}
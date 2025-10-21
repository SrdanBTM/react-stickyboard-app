

import styles from './createNewBoardInput.module.css'
import { useEffect, useContext, useState, useRef } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function CreateNewBoardInput({ isCreateBoard, setIsCreateBoard }) {

  const { setBoards, boardTemplate } = useContext(MainContext)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()


  useEffect(() => {
    isCreateBoard === true && inputRef.current.focus()
  }, [isCreateBoard])


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
              boardId: crypto.randomUUID()
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
    <input
      type='text'
      className={styles.input}
      value={inputValue}
      ref={inputRef}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  )
}
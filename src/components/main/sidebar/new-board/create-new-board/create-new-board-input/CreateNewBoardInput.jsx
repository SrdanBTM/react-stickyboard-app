

import styles from './createNewBoardInput.module.css'
import { useEffect, useContext, useState, useRef } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function CreateNewBoardInput({ isCreateBoard, setIsCreateBoard }) {

  const { addBoard, setBoards, boardTemplate, setIsFilterBoard, setFilterInputValue } = useContext(MainContext)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()


  useEffect(() => {
    isCreateBoard === true && inputRef.current.focus()
  }, [isCreateBoard])


  function handleKeyDown(e) {
    if (e.key === 'Enter' && inputValue.length > 0) {
      setIsFilterBoard(false)
      setFilterInputValue('')
      setIsCreateBoard(false)

      const boardNameValue = inputValue
      addBoard(setBoards, boardTemplate, boardNameValue)
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
      data-id={'createNewBoardInput'}
    />
  )
}
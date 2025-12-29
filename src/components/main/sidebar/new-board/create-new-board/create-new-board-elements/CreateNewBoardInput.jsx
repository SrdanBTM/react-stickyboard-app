

import styles from './createNewBoardElements.module.css'
import { useEffect, useContext, useState, useRef } from 'react'
import { MainContext } from '../../../../../../contexts/MainContext.jsx'
import { addBoard } from '../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'
import { boardTemplate } from '../../../../../../templates/Templates.jsx'


export default function CreateNewBoardInput({ isCreateBoard, setIsCreateBoard }) {

  const { setBoards, setSearchValue } = useContext(MainContext)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()


  useEffect(() => {
    isCreateBoard === true && inputRef.current.focus()
  }, [isCreateBoard])


  function handleKeyDown(e) {
    if (e.key === 'Enter' && inputValue.length > 0) {
      setSearchValue('')
      setIsCreateBoard(false)

      const boardNameValue = inputValue
      addBoard(setBoards, boardTemplate, boardNameValue)
    }
  }


  function handleChange(e) {
    setInputValue(e.target.value)
  }


  return (
    <div className={styles.container}>
      <input
        type='text'
        value={inputValue}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        data-id={'createNewBoardInput'}
        placeholder='Enter board name'
      />
    </div>

  )
}
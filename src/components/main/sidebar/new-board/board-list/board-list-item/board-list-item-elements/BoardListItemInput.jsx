

import styles from './boardListItemElements.module.css'
import { useContext, useRef, useEffect, useState } from 'react'
import { MainContext } from '../../../../../../../contexts/MainContext.jsx'
import { updateAllStickers } from '../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { updateBoard } from '../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function BoardListItemInput({ mappedBoard }) {

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
    if (e.key === 'Enter' && inputValue.length > 0) {
      const propertyToUpdate1 = { key: 'isInput', value: false }
      const propertyToUpdate2 = { key: 'boardName', value: inputValue }
      updateBoard(setBoards, currentBoardId, propertyToUpdate1)
      updateBoard(setBoards, currentBoardId, propertyToUpdate2)
      updateAllStickers(setBoards, currentBoardId, propertyToUpdate2)
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
        ref={mappedBoard.isFocused ? inputRef : null}
        data-id={'boardListInput'}
      />
    </div>
  )
}
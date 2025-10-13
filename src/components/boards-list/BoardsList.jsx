

import styles from './boardsList.module.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'

export default function BoardsList() {

  const { boards, setBoards, setCurrentBoard } = useContext(MainContext)

  const BASE_URL = import.meta.env.BASE_URL

  const [isMouseOver, setIsMouseOver] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentName, setCurrentName] = useState()

  const inputRef = useRef()

  
  const editButton =
    <div
      className={styles.editButton}
      onClick={handleClickEdit}
    >
      <img src={`${BASE_URL}images/icon-edit2.png`} alt="edit" />
    </div>



  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [boards])


  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseLeave() {
    setIsMouseOver(false)
  }

  function handleClickEdit(e) {
    const dataName = e.currentTarget.parentElement.getAttribute('data-name')
    setCurrentName(dataName)
    setBoards(prev => {
      return (
        prev.map(board => {
          return (
            board.boardName === dataName
              ? { ...board, isInput: true, isFocused: true }
              : { ...board, isInput: false }
          )
        })
      )
    })
  }

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setBoards(prev => {
        return (
          prev.map(board => {
            return (
              board.boardName === currentName
                ? { ...board, isInput: false, boardName: inputValue }
                : { ...board }
            )
          })
        )
      })


    }
  }

  function handleClickSelect(e) {
    const selectedBoard = boards.find(board => board.boardName === e.currentTarget.getAttribute('data-name'))

    setCurrentBoard(selectedBoard)
  }


  
  return (
    <div>
      {boards.map((board, index) => {
        return (
          <div
            className={styles.container}
            key={index}
          >
            {board.isInput
              ?
              <div
                className={styles.input}
                onChange={handleChange}
                value={inputValue}
                onKeyDown={handleKeyDown}
              >
                <input
                  type="text"
                  ref={board.isFocused ? inputRef : null}
                />
              </div>
              :
              <div
                className={styles.boardName}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                data-name={board.boardName}
                onClick={handleClickSelect}
              >
                <p>{board.boardName}</p>
                {isMouseOver && editButton}
              </div>
            }
          </div>
        )
      })}
    </div>
  )
}
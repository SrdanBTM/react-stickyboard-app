

import styles from './boardsList.module.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'

export default function BoardsList() {

  const { boards, setBoards } = useContext(MainContext)

  const BASE_URL = import.meta.env.BASE_URL

  const [isMouseOver, setIsMouseOver] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentName, setCurrentName] = useState()

  const inputRef = useRef()

  
  const editButton =
    <div
      className={styles.editButton}
      onClick={handleClick}
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

  function handleClick(e) {
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
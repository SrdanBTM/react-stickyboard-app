

import styles from './boardsList.module.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'

export default function BoardsList() {

  const { boards, setBoards, currentBoard, setCurrentBoard, theme } = useContext(MainContext)

  const BASE_URL = import.meta.env.BASE_URL

  const [isMouseOver, setIsMouseOver] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentName, setCurrentName] = useState()

  const inputRef = useRef()



  // edit button element
  const editButton =
    <div
      className={styles.editButton}
      onClick={handleClickEdit}
    >
      <img src={
        theme === 'darkTheme'
          ? `${BASE_URL}images/icon-edit2.png`
          : `${BASE_URL}images/icon-edit1.png`}
        alt="edit" />
    </div>

  // dots button element
  const dotsButton =
    <div
      className={styles.dotsButton}
      onClick={handleClickDots}
    >
      <img src={
        theme === 'darkTheme'
          ? `${BASE_URL}images/icon-dots2.png`
          : `${BASE_URL}images/icon-dots1.png`}
        alt="edit" />
    </div>



  // focus edited input
  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [boards])



  // setIsMouseOver(true)
  function handleMouseOverSpan() {
    setIsMouseOver(true)
  }

  // setIsMouseOver(false)
  function handleMouseLeaveSpan() {
    setIsMouseOver(false)
  }



  // click on edit => show input and focus
  // take data-name
  // if boardName === data-name => isFocuse:true, isInput:true
  function handleClickEdit(e) {
    const dataName = e.currentTarget.parentElement.parentElement.getAttribute('data-name')
    setCurrentName(dataName)

    setBoards(prev => {
      return (
        prev.map(board => {
          return (
            board.boardName === dataName
              ? { ...board, isInput: true, isFocused: true }
              : { ...board, isInput: false, isFocused: false }
          )
        })
      )
    })
  }



  // setInputValue(input value)
  function handleChangeInput(e) {
    setInputValue(e.target.value)
  }

  // enter on input => isInput:false, boardName:inputValue state
  function handleKeyDownInput(e) {
    if (e.key === 'Enter') {

      setBoards(prev => {
        return (
          prev.map(board => {
            return (
              board.boardName === currentName
                ? { ...board, isInput: false, boardName: inputValue }
                : board
            )
          })
        )
      })
    }


  }



  // click on span => setCurrentBoard(this board)
  function handleClickSpan(e) {
    const selected = boards.find(board => board.boardName === e.currentTarget.getAttribute('data-name'))
    setCurrentBoard(selected)
  }

  // when add new board => setCurrentBoard(this board)
  useEffect(() => {
    const lastBoard = boards[boards.length - 1]
    setCurrentBoard(lastBoard)
  }, [boards])




  function handleClickDots() {
    console.log('radi');
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
                onChange={handleChangeInput}
                value={inputValue}
                onKeyDown={handleKeyDownInput}
              >
                <input
                  type="text"
                  ref={board.isFocused ? inputRef : null}
                />
              </div>
              :
              <div
                className={styles.boardName}
                onMouseOver={handleMouseOverSpan}
                onMouseLeave={handleMouseLeaveSpan}
                data-name={board.boardName}
                onClick={handleClickSpan}
                style={{ border: currentBoard.boardName === board.boardName ? '1px solid var(--border-color)' : '' }}
              >
                <span>{board.boardName}</span>
                <div className={styles.buttons}>
                  {isMouseOver && editButton}
                  {isMouseOver && dotsButton}
                </div>

              </div>
            }
          </div>
        )
      })}
    </div>
  )
}


import styles from './boardList.module.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import Input from './board-list-input/BoardListInput.jsx'
import Span from './board-list-span/BoardListSpan.jsx'

export default function BoardsList() {

  const { boards, setBoards, currentBoard, setCurrentBoard } = useContext(MainContext)


  const [isMouseOver, setIsMouseOver] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentName, setCurrentName] = useState()

  const inputRef = useRef()



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






  return (
    <div>
      {boards.map((board, index) => {
        return (
          <div
            className={styles.container}
            key={index}
          >
            {board.isInput
              ? <Input
                board={board}
                inputRef={inputRef}
                inputValue={inputValue}
                handleChangeInput={handleChangeInput}
                handleKeyDownInput={handleKeyDownInput}
              />
              : <Span
                isMouseOver={isMouseOver}
                setCurrentName={setCurrentName}
                board={board}
                currentBoard={currentBoard}
                handleClickSpan={handleClickSpan}
                handleMouseOverSpan={handleMouseOverSpan}
                handleMouseLeaveSpan={handleMouseLeaveSpan}
              />
            }
          </div>
        )
      })}
    </div>
  )
}
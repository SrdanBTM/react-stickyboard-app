

import styles from './boardList.module.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import Edit from './board-name-edit/BoardNameEdit.jsx'
import Dots from './board-name-dots/BoardNameDots.jsx'
import Input from './board-list-input/BoardListInput.jsx'

export default function BoardsList() {

  const { boards, setBoards, currentBoard, setCurrentBoard, theme } = useContext(MainContext)


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
              ? <Input
                board={board}
                inputRef={inputRef}
                inputValue={inputValue}
                handleChangeInput={handleChangeInput}
                handleKeyDownInput={handleKeyDownInput}
              />
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
                  {isMouseOver &&
                    <>
                      <Edit handleClickEdit={handleClickEdit} />
                      <Dots handleClickDots={handleClickDots} />
                    </>
                  }
                </div>

              </div>
            }
          </div>
        )
      })}
    </div>
  )
}
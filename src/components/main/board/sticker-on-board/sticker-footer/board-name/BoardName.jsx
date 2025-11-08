


import styles from './boardName.module.css'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function BoardName({ stickerId }) {

  const { boards, setBoards, currentBoardId } = useContext(MainContext)

  const currentBoard = boards.find(board => board.boardId === currentBoardId)
  const currentBoardName = currentBoard.boardName
  const currentSticker = currentBoard.stickers.find(sticker => sticker.stickerId === stickerId)
  
  
  useEffect(() => {
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? {
            ...board,
            stickers: board.stickers.map(sticker => {
              return (
                sticker.stickerId === stickerId
                  ? {
                    ...sticker,
                    boardName: currentBoardName
                  }
                  : sticker
              )
            })
          }
          : board
      )
    }))
  }, [currentBoardName])


  return (
    <div className={styles.container}>
      <span>{currentSticker.boardName}</span>
    </div>
  )
}



import styles from './boardName.module.css'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function BoardName({ mappedSticker }) {

  const { boards, setBoards, currentBoardId, isFilterBoard } = useContext(MainContext)

  const currentBoard = boards.find(board => board.boardId === currentBoardId)
  let currentBoardName = null
  if (currentBoardId) {
    currentBoardName = currentBoard.boardName
  }


  useEffect(() => {
      setBoards(prev => prev.map(board => {
        return (
          board.boardId === currentBoardId
            ? {
              ...board,
              stickers: board.stickers.map(sticker => {
                return (
                  sticker.stickerId === mappedSticker.stickerId
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
      {isFilterBoard
        && <span>{mappedSticker.boardName}</span>}
    </div>
  )
}
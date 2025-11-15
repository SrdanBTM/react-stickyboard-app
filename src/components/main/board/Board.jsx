
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'
import styles from './board.module.css'
import StickerOnBoard from './sticker-on-board/StickerOnBoard.jsx'
import SearchedStickerOnBoard from './searched-sticker-on-board/SearchedStickerOnBoard.jsx'


export default function Board() {

  const { currentBoardId, boards, boardRef, isFilterBoard, filterInputValue } = useContext(MainContext)
  let currentBoard = null
  if (boards.length > 0) {
    currentBoard = boards.find(board => board.boardId === currentBoardId)
  }

  const allStickers = boards.flatMap(board => board.stickers)
  let filteredStickers = allStickers.filter(sticker => sticker.title.toLowerCase().includes(filterInputValue.toLowerCase()))
  if (filterInputValue.length === 0) {
    filteredStickers = []
  }


  return (
    <section className={styles.container}>

      <div className={styles.heading}>
        {isFilterBoard
          ? <span>Search results</span>
          : currentBoard && <span>{currentBoard.boardName}</span>
        }
      </div>

      {isFilterBoard
        ? <div className={styles.filterBoard} ref={boardRef}>
          {filteredStickers.map(sticker => {
            return (
              <SearchedStickerOnBoard
                key={sticker.stickerId}
                mappedSticker={sticker}
              />
            )
          })}
        </div>
        : <div className={styles.board} ref={boardRef}>
          {currentBoard
            && currentBoard.stickers.map(sticker => {
              return (
                <StickerOnBoard
                  key={sticker.stickerId}
                  mappedSticker={sticker}
                />
              )
            })}
        </div>
      }

    </section>
  )
}
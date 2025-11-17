
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'
import styles from './board.module.css'
import StickerOnBoard from './sticker-on-board/StickerOnBoard.jsx'
import StickerOnSearchResultBoard from './sticker-on-search-result-board/StickerOnSearchResultBoard.jsx'


export default function Board() {

  const { currentBoardId, boards, boardRef, isSearchResultBoard, searchValue } = useContext(MainContext)
  let currentBoard = null
  if (boards.length > 0) {
    currentBoard = boards.find(board => board.boardId === currentBoardId)
  }

  const allStickers = boards.flatMap(board => board.stickers)
  let filteredStickers = allStickers.filter(sticker => sticker.title.toLowerCase().includes(searchValue.toLowerCase()))
  if (searchValue.length === 0) {
    filteredStickers = []
  }


  return (
    <section className={styles.container}>

      <div className={styles.heading}>
        {isSearchResultBoard
          ? <span>Search results</span>
          : currentBoard && <span>{currentBoard.boardName}</span>
        }
      </div>

      {isSearchResultBoard
        ? <div className={styles.filterBoard} ref={boardRef}>
          {filteredStickers.map(sticker => {
            return (
              <StickerOnSearchResultBoard
                key={sticker.stickerId}
                mappedSticker={sticker}
              />
            )
          })}
        </div>
        : <div className={styles.board} ref={boardRef}>
          {currentBoard
            && currentBoard.stickers
              .filter(sticker => !sticker.checked)
              .map(sticker => {
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
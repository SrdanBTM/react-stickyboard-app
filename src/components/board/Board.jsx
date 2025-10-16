
import { useContext } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'
import styles from './board.module.css'

export default function Board() {

  const { boards, currentBoard } = useContext(MainContext)

  const current = boards.find(board => board.boardName = currentBoard.boardName)




  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <p>{current.boardName}</p>
      </div>

      <div className={styles.board}>
        {current.stickers.map((sticker, index) => {
          return (
            <div
              key={index}
              className={styles.sticker}
              style={{ backgroundColor: sticker.color }}
            >
              {index}
            </div>
          )
        })}
      </div>
    </section>
  )
}
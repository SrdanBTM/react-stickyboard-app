
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'
import styles from './board.module.css'


export default function Board() {

  const { currentBoard } = useContext(MainContext)
  console.log(currentBoard);
  
  
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <p>{currentBoard.boardName}</p>
      </div>

      <div className={styles.board}>
        {currentBoard.stickers.map((sticker, index) => {
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
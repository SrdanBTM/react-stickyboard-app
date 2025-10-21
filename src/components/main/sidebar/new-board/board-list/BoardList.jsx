

import styles from './boardList.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import Input from './board-list-input/BoardListInput.jsx'
import Span from './board-list-span/BoardListSpan.jsx'


export default function BoardsList() {

  const { boards } = useContext(MainContext)


  return (
    <div>
      {boards.map((board, index) => {
        return (
          <div className={styles.container} key={index}>
            {board.isInput
              ? <Input board={board} />
              : <Span board={board} />
            }
          </div>
        )
      })}
    </div>
  )
}
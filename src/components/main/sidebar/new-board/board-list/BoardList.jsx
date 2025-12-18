

import styles from './boardList.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import BoardListItem from './board-list-item/BoardListItem.jsx'


export default function BoardsList() {

  const { boards } = useContext(MainContext)


  return (
    <div className={styles.container}>
      {boards.length > 0
        && boards.map(board => {
          return (
           <BoardListItem key={board.boardId} mappedBoard={board} />
          )
        })}
    </div>
  )
}
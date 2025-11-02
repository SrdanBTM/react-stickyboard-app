

import styles from './boardList.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import Input from './board-list-input/BoardListInput.jsx'
import Span from './board-list-span/BoardListSpan.jsx'
import DeleteClose from './board-list-delete-close/BoardListDeleteClose.jsx'


export default function BoardsList() {

  const { boards, currentBoardId } = useContext(MainContext)


  return (
    <div>
      {boards.length > 0
        && boards.map((board, index) => {
          return (
            <div
              className={styles.container}
              key={index}
              style={{
                height: board.isDeleteShowed ? '70px' : '37px',
                border: board.boardId === currentBoardId ? '1px solid var(--border-color)' : ''
              }}

            >
              {board.isInput
                ?
                <Input board={board} />
                :
                <>
                  <DeleteClose board={board} />
                  <Span board={board} />
                </>
              }
            </div>
          )
        })}
    </div>
  )
}
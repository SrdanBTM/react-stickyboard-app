

import styles from './boardListItemSpanButton.module.css'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { ThemeContext } from '../../../../../../../../contexts/ThemeContext.jsx'
import { updateAllBoards } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function BoardListItemSpanButtonDelete({ mappedBoard }) {

  const { setBoards } = useContext(MainContext)
  const { theme } = useContext(ThemeContext)


  function handleClick() {
    updateAllBoards(
      setBoards,
      mappedBoard.boardId,
      [{ keyTrue: 'isDeleteShowed', valueTrue: !mappedBoard.isDeleteShowed },
      { keyFalse: 'isDeleteShowed', valueFalse: false }]
    )
  }


  return (
    <div
      className={`${styles.container} icon iconDanger`}
      onClick={handleClick}
    >
      <IconDelete />
    </div>
  )
}
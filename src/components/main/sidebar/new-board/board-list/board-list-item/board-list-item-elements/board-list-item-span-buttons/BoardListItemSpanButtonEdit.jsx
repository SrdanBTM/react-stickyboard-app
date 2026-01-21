

import styles from './boardListItemSpanButton.module.css'
import { IconEdit } from '../../../../../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { ThemeContext } from '../../../../../../../../contexts/ThemeContext.jsx'
import { updateAllBoards } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function BoardListItemSpanButtonEdit({ mappedBoard }) {

  const { setCurrentBoardId, setBoards } = useContext(MainContext)


  function handleClick() {
    updateAllBoards(
      setBoards,
      mappedBoard.boardId,
      [{ keyTrue: 'isInput', valueTrue: true }, { keyFalse: 'isInput', valueFalse: false }]
    )
    updateAllBoards(
      setBoards,
      mappedBoard.boardId,
      [{ keyTrue: 'isFocused', valueTrue: true }, { keyFalse: 'isFocused', valueFalse: false }]
    )
    setCurrentBoardId(mappedBoard.boardId)
  }


  return (
    <button
      className={`${styles.container} icon iconNormal`}
      onClick={handleClick}
      data-id={'boardNameEdit'}
      title='Rename board'
    >
      <IconEdit />
    </button>
  )
}
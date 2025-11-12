

import styles from './boardNameEdit.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider'


export default function BoardNameEdit() {

  const { updateAllBoards, theme, setCurrentBoardId, setBoards } = useContext(MainContext)
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick(e) {
    const currentBoardId = e.currentTarget.parentElement.parentElement.getAttribute('data-id')
    const propertyTernaryPair1 = [{keyTrue: 'isInput', valueTrue: true}, {keyFalse: 'isInput', valueFalse: false}]
    const propertyTernaryPair2 = [{keyTrue: 'isFocused', valueTrue: true}, {keyFalse: 'isFocused', valueFalse: false}]
    updateAllBoards(setBoards, currentBoardId, propertyTernaryPair1)
    updateAllBoards(setBoards, currentBoardId, propertyTernaryPair2)
    setCurrentBoardId(currentBoardId)
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      <img src={
        theme === 'darkTheme'
          ? `${BASE_URL}images/icon-edit2.png`
          : `${BASE_URL}images/icon-edit1.png`}
        alt="edit"
        data-id={'boardNameEdit'}
        />
    </div>
  )
}
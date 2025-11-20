

import styles from './deleteSticker.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function DeleteSticker({ mappedSticker }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { deleteSticker, setBoards, currentBoardId, theme } = useContext(MainContext)


  function handleClick(e) {
    const currentStickerId = e.currentTarget.getAttribute('data-id')
    deleteSticker(setBoards, currentBoardId, currentStickerId)
  }


  return (
    <div
      className={styles.container}
      data-id={mappedSticker.stickerId}
      onClick={handleClick}
    >
      <img
        src={`${BASE_URL}${theme === 'lightTheme' ? 'images/icon-delete5.png' : 'images/icon-delete5.png'}`}
        alt="delete sticker" />
    </div>
  )
}
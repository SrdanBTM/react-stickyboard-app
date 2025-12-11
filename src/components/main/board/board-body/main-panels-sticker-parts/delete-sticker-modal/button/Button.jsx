



import styles from './button.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'
import { ThemeContext } from '../../../../../../../contexts/ThemeContext.jsx'


export default function Delete({ mappedSticker }) {


  const BASE_URL = import.meta.env.BASE_URL
  const { deleteSticker, setBoards, currentBoardId } = useContext(MainContext)
  const { theme } = useContext(ThemeContext)


  function handleClick(e) {
    const currentStickerId = mappedSticker.stickerId
    deleteSticker(setBoards, currentBoardId, currentStickerId)
  }


  return (
    <div className={styles.container}>
      <span onClick={handleClick}>DELETE STICKER</span>
    </div>
  )
}
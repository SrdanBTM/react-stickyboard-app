



import styles from './button.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../contexts/MainContext.jsx'
import { ThemeContext } from '../../../../../../../contexts/ThemeContext.jsx'
import { deleteSticker } from '../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function Delete({ mappedSticker }) {


  const BASE_URL = import.meta.env.BASE_URL
  const { setBoards, currentBoardId } = useContext(MainContext)
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




import styles from './button.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function Delete({ mappedSticker }) {


  const BASE_URL = import.meta.env.BASE_URL
  const { deleteSticker, setBoards, currentBoardId, theme } = useContext(MainContext)


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




import styles from './buttons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { ThemeContext } from '../../../../../../../../contexts/ThemeContext.jsx'
import { deleteSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'


export default function DeleteButton({ mappedSticker }) {


  const { setBoards, currentBoardId } = useContext(MainContext)
  const { theme } = useContext(ThemeContext)


  function handleClick(e) {
    const currentStickerId = mappedSticker.stickerId
    deleteSticker(setBoards, currentBoardId, currentStickerId)
  }


  return (
    <div
      className={`${styles.container} ${styles.buttonDanger} icon iconDanger`}
      onClick={handleClick}
    >
      <IconDelete />
    </div>
  )
}
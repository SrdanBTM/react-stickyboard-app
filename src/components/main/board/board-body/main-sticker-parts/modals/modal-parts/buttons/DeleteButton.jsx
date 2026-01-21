



import styles from './buttons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { deleteSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'


export default function DeleteButton({ mappedSticker }) {

  const { setBoards, currentBoardId } = useContext(MainContext)


  function handleClick() {
    const currentStickerId = mappedSticker.stickerId
    deleteSticker(setBoards, currentBoardId, currentStickerId)
  }


  return (
    <button
      className={`${styles.container} ${styles.buttonDanger} iconSticker iconStickerDanger`}
      onClick={handleClick}
    >
      <IconDelete />
    </button>
  )
}




import styles from './deleteAllCheckedStickersModal.module.css'
import Delete from './delete/Delete.jsx'
import Close from './close/Close.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'


export default function DeleteAllCheckedStickersModal() {

  const { boards, currentBoardId } = useContext(MainContext)

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.message}>
          <p>Are you sure you want to delete all checked stickers on all boards?</p>
        </div>

        <div className={styles.buttons}>
          <Delete />
          <Close />
        </div>
        
      </div>
    </div>
  )
}
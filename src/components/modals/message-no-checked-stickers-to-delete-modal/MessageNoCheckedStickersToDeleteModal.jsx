



import styles from './messageNoCheckedStickersToDeleteModal.module.css'
import Ok from './ok/Ok.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'


export default function MessageNoCheckedStickersToDeleteModal() {

  const { boards, currentBoardId } = useContext(MainContext)

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.message}>
          <p>There are no checked stickers to delete.</p>
        </div>

        <div className={styles.buttons}>
          <Ok />
        </div>
        
      </div>
    </div>
  )
}
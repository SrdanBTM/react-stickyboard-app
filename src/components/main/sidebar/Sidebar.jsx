

import styles from './sidebar.module.css'
import NewBoard from './new-board/NewBoard.jsx'
import NewSticker from './new-sticker/NewSticker.jsx'


export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <NewSticker />
      <div className={styles.border}></div>
      <NewBoard />
    </aside>
  )
} 
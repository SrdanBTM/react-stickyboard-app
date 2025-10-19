
import styles from './main.module.css'
import Sidebar from './sidebar/Sidebar.jsx'
import Board from './board/Board.jsx'

export default function Main() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Board />
    </main>
  )
}
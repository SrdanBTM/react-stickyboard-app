
import styles from './main.module.css'
import Sidebar from './sidebar/Sidebar.jsx'
import Board from './board/Board.jsx'
import CheckedStickers from './checked-stickers/CheckedStickers.jsx'

export default function Main() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <Board />
      <CheckedStickers />
    </main>
  )
}
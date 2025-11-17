
import styles from './main.module.css'
import Sidebar from './sidebar/Sidebar.jsx'
import Board from './board/Board.jsx'
import CheckedStickers from './checked-stickers-panel/CheckedStickersPanel.jsx'
import { useContext } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'

export default function Main() {

  const { isSearchResultBoard } = useContext(MainContext)

  return (
    <main className={styles.container}>
      <Sidebar />
      <Board />
      {!isSearchResultBoard && <CheckedStickers />}
    </main>
  )
}
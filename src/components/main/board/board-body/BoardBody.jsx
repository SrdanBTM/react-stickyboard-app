

import styles from './boardBody.module.css'
import BoardStickersPanel from './panels-and-stickers-on-panels/board-stickers-panel/BoardStickersPanel.jsx'
import FilteredStickersPanel from './panels-and-stickers-on-panels/filtered-stickers-panel/FilteredStickersPanel.jsx'
import SearchedStickersPanel from './panels-and-stickers-on-panels/searched-stickers-panel/SearchedStickersPanel.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'


export default function BoardBody() {

  const { isSearchResultBoard, isFilterResultBoard } = useContext(MainContext)

  return (
    <div className={styles.container}>
      {!isSearchResultBoard && !isFilterResultBoard && <BoardStickersPanel />}
      {isSearchResultBoard && <SearchedStickersPanel />}
      {isFilterResultBoard && <FilteredStickersPanel />}
    </div>
  )
}
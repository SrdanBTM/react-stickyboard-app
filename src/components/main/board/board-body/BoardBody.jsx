

import styles from './boardBody.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../contexts/MainContext.jsx'

import MainPanelBoard from './main-panels/MainPanelBoard.jsx'
import MainPanelSearch from './main-panels/MainPanelSearch.jsx'
import MainPanelFilter from './main-panels/MainPanelFilter.jsx'

import CheckedPanelBoard from './checked-panels/CheckedPanelBoard.jsx'
import CheckedPanelSearch from './checked-panels/CheckedPanelSearch.jsx'
import CheckedPanelFilter from './checked-panels/CheckedPanelFilter.jsx'


export default function BoardBody() {

  const { currentBoardPanel, selectedFilterButton } = useContext(MainContext)

  
  const panelVariantes = {
    board: MainPanelBoard,
    search: MainPanelSearch,
    filter: MainPanelFilter
  }

  const checkedPanelVariantes = {
    board: CheckedPanelBoard,
    search: CheckedPanelSearch,
    filter: CheckedPanelFilter
  }


  const MainPanelVariant = panelVariantes[currentBoardPanel]
  const CheckedPanelVariant = checkedPanelVariantes[currentBoardPanel]


  return (
    <div className={styles.container}>
      <MainPanelVariant />

      {selectedFilterButton !== 'datedNextDays'
        && <CheckedPanelVariant />}
    </div>
  )
}
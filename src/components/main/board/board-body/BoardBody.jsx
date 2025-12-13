

import styles from './boardBody.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../contexts/MainContext.jsx'

import MainPanelBoard from './main-panels/MainPanelBoard.jsx'
import MainPanelSearch from './main-panels/MainPanelSearch.jsx'
import MainPanelFilter from './main-panels/MainPanelFilter.jsx'

import CheckedBoardPanel from './checked-panels/CheckedBoardPanel.jsx'
import CheckedSearchPanel from './checked-panels/CheckedSearchPanel.jsx'
import CheckedFilterPanel from './checked-panels/CheckedFilterPanel.jsx'


export default function BoardBody() {

  const { currentBoardPanel } = useContext(MainContext)

  const panelVariantes = {
    board: MainPanelBoard,
    search: MainPanelSearch,
    filter: MainPanelFilter
  }

  const checkedPanelVariantes = {
    board: CheckedBoardPanel,
    search: CheckedSearchPanel,
    filter: CheckedFilterPanel
  }


  const MainPanelVariant = panelVariantes[currentBoardPanel]
  const CheckedPanelVariant = checkedPanelVariantes[currentBoardPanel]


  return (
    <div className={styles.container}>
      <MainPanelVariant />
      <CheckedPanelVariant />
    </div>
  )
}
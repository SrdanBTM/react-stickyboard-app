

import styles from './boardBody.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'

import MainPanelBoard from './main-panels/MainPanelBoard.jsx'
import MainPanelSearch from './main-panels/MainPanelSearch.jsx'
import MainPanelFilter from './main-panels/MainPanelFilter.jsx'

import CheckedPanelsBase from './checked-panels-base/CheckedPanelsBase.jsx'


export default function BoardBody() {

  const { currentBoardPanel } = useContext(MainContext)

  const panelVariantes = {
    board: MainPanelBoard,
    search: MainPanelSearch,
    filter: MainPanelFilter
  }

  const MainPanelVariant = panelVariantes[currentBoardPanel]


  return (
    <div className={styles.container}>
      <MainPanelVariant />
      <CheckedPanelsBase />
    </div>
  )
}
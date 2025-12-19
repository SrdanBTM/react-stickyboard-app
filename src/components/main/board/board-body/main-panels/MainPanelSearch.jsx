

import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import MainPanelBase from '../main-panel-base/MainPanelBase.jsx'


export default function MainPanelSearch() {

  const { searchValue, boards } = useContext(MainContext)


  const searchedStickers = searchValue.length === 0
    ? []
    : boards.flatMap(board => board.stickers)
      .filter(sticker => !sticker.checked)
      .filter(sticker => sticker.title.toLowerCase().includes(searchValue.toLowerCase()))


  return (
    <MainPanelBase
      stickers={searchedStickers}
    />
  )
}


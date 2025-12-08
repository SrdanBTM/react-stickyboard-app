

import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import MainPanelsBase from '../main-panels-base/MainPanelsBase.jsx'


export default function MainPanelSearch() {

  const { searchValue, boards } = useContext(MainContext)


  const searchedStickers = searchValue.length === 0
    ? []
    : boards.flatMap(board => board.stickers)
      .filter(sticker => !sticker.checked)
      .filter(sticker => sticker.title.toLowerCase().includes(searchValue.toLowerCase()))


  return (
    <MainPanelsBase
      stickers={searchedStickers}
    />
  )
}


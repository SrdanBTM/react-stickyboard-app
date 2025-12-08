

import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'
import MainPanelsBase from '../main-panels-base/MainPanelsBase.jsx'


export default function MainPanelFilter() {

  const { boards } = useContext(MainContext)

  const filteredStickers = boards.flatMap(board => board.stickers.filter(sticker => sticker.isDateTimeValid))


  return (
    <MainPanelsBase
      stickers={filteredStickers}
    />
  )
}



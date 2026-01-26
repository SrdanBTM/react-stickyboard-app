

import CheckedPanelBase from '../checked-panel-base/CheckedPanelBase.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'


export default function CheckedPanelSearch() {

  const { boards, searchValue } = useContext(MainContext)


  const stickersToShowOnCheckedPanel = searchValue.length === 0
    ? []
    : boards.flatMap(board => board.stickers)
      .filter(sticker => sticker.checked)
      .filter(sticker => sticker.title.toLowerCase().includes(searchValue.toLowerCase()))


  return (
    <CheckedPanelBase
      stickersToShowOnCheckedPanel={stickersToShowOnCheckedPanel}
    />
  )
}
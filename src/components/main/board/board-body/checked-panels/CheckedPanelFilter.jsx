


import CheckedPanelBase from '../checked-panel-base/CheckedPanelBase.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'

export default function CheckedPanelFilter() {

  const { boards } = useContext(MainContext)


  const stickersToShowOnCheckedPanel = boards.flatMap(board =>
    board.stickers.filter(sticker =>
      sticker.checked === true &&
      sticker.isDateTimeValid === true
    )
  )
  

  return (
    <CheckedPanelBase
      stickersToShowOnCheckedPanel={stickersToShowOnCheckedPanel}
    />
  )
}

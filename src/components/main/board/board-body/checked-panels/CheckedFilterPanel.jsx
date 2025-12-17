


import CheckedPanelsBase from '../checked-panels-base/CheckedPanelsBase.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'

export default function CheckedFilterPanel() {

  const { boards } = useContext(MainContext)


  const stickersToShowOnCheckedPanel = boards.flatMap(board =>
    board.stickers.filter(sticker =>
      sticker.checked === true &&
      sticker.isDateTimeValid === true
    )
  )
  

  return (
    <CheckedPanelsBase
      stickersToShowOnCheckedPanel={stickersToShowOnCheckedPanel}
    />
  )
}

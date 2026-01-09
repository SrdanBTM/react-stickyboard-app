


import CheckedPanelBase from '../checked-panel-base/CheckedPanelBase.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'

export default function CheckedPanelFilter() {

  const { boards } = useContext(MainContext)


  const filteredStickers = boards.flatMap(board =>
    board.stickers.filter(sticker =>
      sticker.checked === true &&
      sticker.isDateTimeValid === true
    )
  )

  const sortedStickers = filteredStickers.sort((a, b) => {
    const da = a.dateTimeValidValue
    const db = b.dateTimeValidValue
  
    const dateA = new Date(da.year, da.month - 1, da.day)
    const dateB = new Date(db.year, db.month - 1, db.day)
  
    return dateA - dateB 
  })
  

  return (
    <CheckedPanelBase
      stickersToShowOnCheckedPanel={sortedStickers}
    />
  )
}

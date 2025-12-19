


import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import MainPanelBase from '../main-panel-base/MainPanelBase.jsx'



export default function MainPanelFilter() {

  const { boards, datedNextDaysValue } = useContext(MainContext)

  const today = new Date()
  const todayDay = today.getDate()
  const todayMonth = today.getMonth() + 1
  const todayYear = today.getFullYear()


  let filteredStickers = []

  if (datedNextDaysValue === 'all') {

    filteredStickers = boards.flatMap(board =>
      board.stickers.filter(sticker =>
        sticker.isDateTimeValid &&
        !sticker.checked                
      )
    )

  } else if (typeof datedNextDaysValue === 'number') {

    const startDate = new Date(todayYear, todayMonth, todayDay)
    const endDate = new Date(todayYear, todayMonth, todayDay + datedNextDaysValue)

    filteredStickers = boards.flatMap(board =>
      board.stickers.filter(sticker => {
        if (!sticker.isDateTimeValid) return false
        if (sticker.checked) return false 

        const { day, month, year } = sticker.dateTimeValidValue
        const stickerDate = new Date(year, month, day)

        return stickerDate >= startDate && stickerDate <= endDate
      })
    )
  }


  const sortedStickers = filteredStickers.sort((a, b) => {
    const da = a.dateTimeValidValue
    const db = b.dateTimeValidValue
  
    const dateA = new Date(da.year, da.month - 1, da.day)
    const dateB = new Date(db.year, db.month - 1, db.day)
  
    return dateA - dateB 
  })


  return (
    <MainPanelBase stickers={sortedStickers} />
  )
}

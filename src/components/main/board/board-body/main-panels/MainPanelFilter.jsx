

import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import MainPanelsBase from '../main-panels-base/MainPanelsBase.jsx'


export default function MainPanelFilter() {

  const { boards, datedNextDaysValue } = useContext(MainContext)


  const todayDay = new Date().getDate()
  const todayMonth = new Date().getMonth() + 1
  const todayYear = new Date().getFullYear()


  let filteredStickers = []


  if (datedNextDaysValue === 'all') {
    filteredStickers = boards.flatMap(board => board.stickers.filter(sticker => sticker.isDateTimeValid))

  } else if (typeof datedNextDaysValue === 'number') {

    const startDate = new Date(todayYear, todayMonth, todayDay)
    const endDate = new Date(todayYear, todayMonth, todayDay + datedNextDaysValue)
  
    filteredStickers = boards.flatMap(board =>
      board.stickers.filter(sticker => {
        if (!sticker.isDateTimeValid) return false
  
        const { day, month, year } = sticker.dateTimeValidValue
        const stickerDate = new Date(year, month, day)
  
        return stickerDate >= startDate && stickerDate <= endDate
      })
    )
  }


  return (
    <MainPanelsBase
      stickers={filteredStickers}
    />
  )
}



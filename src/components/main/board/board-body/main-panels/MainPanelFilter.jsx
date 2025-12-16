

import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import MainPanelsBase from '../main-panels-base/MainPanelsBase.jsx'


export default function MainPanelFilter() {

  const { boards, datedNextDaysValue } = useContext(MainContext)

  const today = new Date()
  const todayDay = today.getDate()
  const todayMonth = today.getMonth() + 1
  const todayYear = today.getFullYear()


  let filteredStickers = []


  if (datedNextDaysValue === 'all') {
    filteredStickers = boards.flatMap(board => board.stickers.filter(sticker => sticker.isDateTimeValid))

  } else if (typeof datedNextDaysValue === 'number') {
    const maxDay = todayDay + datedNextDaysValue

    const daysInCurrentMonth = new Date(todayYear, todayMonth, 0).getDate()

    filteredStickers = boards.flatMap(board =>
      board.stickers.filter(sticker => 
        sticker.isDateTimeValid && sticker.dateTimeValidValue.day >= todayDay && sticker.dateTimeValidValue.day <= maxDay)
    )
  }





  return (
    <MainPanelsBase
      stickers={filteredStickers}
    />
  )
}



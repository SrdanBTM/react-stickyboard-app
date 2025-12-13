

import CheckedPanelsBase from '../checked-panels-base/CheckedPanelsBase.jsx'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import { updateBoard } from '../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function CheckedBoardPanel() {

  const { boards, setBoards, currentBoardId } = useContext(MainContext)


  const stickersToShowOnCheckedPanel = boards.flatMap(board => board.stickers.filter(sticker => sticker.checked))


  return (
    <CheckedPanelsBase
      stickersToShowOnCheckedPanel={stickersToShowOnCheckedPanel}
    >

    </CheckedPanelsBase>
  )
}
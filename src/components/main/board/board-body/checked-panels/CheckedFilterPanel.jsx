

import CheckedPanelsBase from '../checked-panels-base/CheckedPanelsBase.jsx'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import { updateBoard } from '../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function CheckedFilterPanel() {

  const { boards, setBoards, currentBoardId } = useContext(MainContext)


  // skupiti sve stickere sa datumom u stickersToShowOnCheckedPanel
  const stickersToShowOnCheckedPanel = []
  



  return (
    <CheckedPanelsBase
      stickersToShowOnCheckedPanel={stickersToShowOnCheckedPanel}
    >

    </CheckedPanelsBase>
  )
}
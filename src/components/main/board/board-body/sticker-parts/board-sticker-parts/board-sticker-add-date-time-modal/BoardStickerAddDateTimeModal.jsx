

import AddDateTitle from './add-date-title/AddDateTitle.jsx'
import Inputs from './inputs/Inputs.jsx'
import Message from './message/Message.jsx'
import Buttons from './buttons/Buttons.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function BoardStickerAddDateTimeModal({ mappedSticker }) {

  const { BoardStickerModalWraper } = useContext(MainContext)


  return (
    <BoardStickerModalWraper
      mappedSticker={mappedSticker}
    >
      <div>
        <AddDateTitle />
        <Inputs mappedSticker={mappedSticker} />
        <Message mappedSticker={mappedSticker} />
        <Buttons mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWraper>
  )
}
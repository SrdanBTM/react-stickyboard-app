

import AddDateTitle from './add-date-title/AddDateTitle.jsx'
import Inputs from './inputs/Inputs.jsx'
import Message from './message/Message.jsx'
import Buttons from './buttons/Buttons.jsx'
import BoardStickerModalWraper from '../../../../../../../wrapers/board-sticker-modal-wraper/BoardStickerModalWraper.jsx'


export default function BoardStickerAddDateTimeModal({ mappedSticker }) {

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
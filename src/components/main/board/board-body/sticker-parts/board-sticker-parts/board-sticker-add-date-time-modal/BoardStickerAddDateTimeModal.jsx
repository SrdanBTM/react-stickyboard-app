

import AddDateTitle from './add-date-title/AddDateTitle.jsx'
import Inputs from './inputs/Inputs.jsx'
import Message from './message/Message.jsx'
import Buttons from './buttons/Buttons.jsx'
import BoardStickerModalWrapper from '../../../../../../../wrappers/board-sticker-modal-wrapper/BoardStickerModalWrapper.jsx'


export default function BoardStickerAddDateTimeModal({ mappedSticker }) {

  return (
    <BoardStickerModalWrapper
      mappedSticker={mappedSticker}
    >
      <div>
        <AddDateTitle />
        <Inputs mappedSticker={mappedSticker} />
        <Message mappedSticker={mappedSticker} />
        <Buttons mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWrapper>
  )
}
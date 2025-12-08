

import Title from './title/Title.jsx'
import Palette from './palette/Palette.jsx'
import BoardStickerModalWrapper from '../../../../../../wrappers/board-sticker-modal-wrapper/BoardStickerModalWrapper.jsx'


export default function ChangeColorModal({ mappedSticker }) {



  return (
    <BoardStickerModalWrapper
      mappedSticker={mappedSticker}
    >
      <div>
        <Title />
        <Palette mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWrapper>
  )
}





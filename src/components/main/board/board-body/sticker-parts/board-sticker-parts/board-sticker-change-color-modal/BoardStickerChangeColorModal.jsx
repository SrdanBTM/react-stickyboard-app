

import ColorsTitle from './colors-title/ColorsTitle.jsx'
import ColorsPalette from './colors-palette/ColorsPalette.jsx'
import BoardStickerModalWrapper from '../../../../../../../wrappers/board-sticker-modal-wrapper/BoardStickerModalWrapper.jsx'


export default function BoardStickerChangeColorModal({ mappedSticker }) {



  return (
    <BoardStickerModalWrapper
      mappedSticker={mappedSticker}
    >
      <div>
        <ColorsTitle />
        <ColorsPalette mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWrapper>
  )
}





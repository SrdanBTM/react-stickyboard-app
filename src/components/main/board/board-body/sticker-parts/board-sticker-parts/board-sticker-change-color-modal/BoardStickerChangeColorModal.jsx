

import ColorsTitle from './colors-title/ColorsTitle.jsx'
import ColorsPalette from './colors-palette/ColorsPalette.jsx'
import BoardStickerModalWraper from '../../../../../../../wrapers/board-sticker-modal-wraper/BoardStickerModalWraper.jsx'


export default function BoardStickerChangeColorModal({ mappedSticker }) {



  return (
    <BoardStickerModalWraper
      mappedSticker={mappedSticker}
    >
      <div>
        <ColorsTitle />
        <ColorsPalette mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWraper>
  )
}





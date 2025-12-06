


import StickerHeader from '../../../sticker-parts/board-sticker-parts/board-sticker-header/BoardStickerHeader.jsx'
import StickerNote from '../../../sticker-parts/board-sticker-parts/board-sticker-note/BoardStickerNote.jsx'
import StickerFooter from '../../../sticker-parts/board-sticker-parts/board-sticker-footer/BoardStickerFooter.jsx'
import StickerOnPanelWrapper from '../../../../../../../wrappers/sticker-on-panel-wrapper/StickerOnPanelWrapper.jsx'


export default function StickerOnFilteredStickersPanel({ mappedSticker }) {

  return (
    <StickerOnPanelWrapper mappedSticker={mappedSticker} variant='filter'>

      <StickerHeader mappedSticker={mappedSticker} />
      <StickerNote mappedSticker={mappedSticker} />
      <StickerFooter mappedSticker={mappedSticker} />

    </StickerOnPanelWrapper>
  )
}
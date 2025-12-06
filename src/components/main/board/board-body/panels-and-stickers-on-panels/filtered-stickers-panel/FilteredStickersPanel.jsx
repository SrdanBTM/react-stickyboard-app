

import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import StickersPanelWrapper from '../../../../../../wrappers/stickers-panel-wrapper/StickersPanelWrapper.jsx'
import StickerOnFilteredStickersPanel from './sticker-on-filtered-stickers-panel/StickerOnFilteredStickersPanel.jsx'


export default function FilteredStickersPanel() {

  const { boards } = useContext(MainContext)

  const filteredStickers = boards.flatMap(board => board.stickers.filter(sticker => sticker.isDateTimeValid))


  return (
    <StickersPanelWrapper variant='filter'>

      {filteredStickers.map(sticker => (
        <StickerOnFilteredStickersPanel
          key={sticker.stickerId}
          mappedSticker={sticker}
        />
      ))}

    </StickersPanelWrapper>
  )
}



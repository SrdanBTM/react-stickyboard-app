

import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import StickerOnSearchedStickersPanel from './sticker-on-searched-stickerst-panel/StickerOnSearchedStickersPanel.jsx'
import StickersPanelWrapper from '../../../../../../wrapers/stickers-panel-wrapper/StickersPanelWrapper.jsx'


export default function SearchedStickersPanel() {

  const { searchValue, boards } = useContext(MainContext)


  const searchedStickers = searchValue.length === 0
    ? []
    : boards.flatMap(board => board.stickers)
      .filter(sticker => !sticker.checked)
      .filter(sticker => sticker.title.toLowerCase().includes(searchValue.toLowerCase()))


  return (
    <StickersPanelWrapper variant='search'>

      {searchedStickers.map(sticker => (
        <StickerOnSearchedStickersPanel
          key={sticker.stickerId}
          mappedSticker={sticker}
        />
      ))}

    </StickersPanelWrapper>
  )
}


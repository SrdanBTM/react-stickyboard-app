

import styles from './boardStickerChangeColorModal.module.css'
import ColorsPalette from './colors-palette/ColorsPalette.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function BoardStickerChangeColorModal({ mappedSticker }) {

  const { BoardStickerModalWraper } = useContext(MainContext)


  return (
    <BoardStickerModalWraper
      mappedSticker={mappedSticker}
    >
      <div className={styles.content}>
        <ColorsPalette mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWraper>
  )
}





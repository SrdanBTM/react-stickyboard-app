

import styles from './boardStickerDeleteModal.module.css'
import DeleteButton from './delete-button/DeleteButton.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function BoardStickerDeleteModal({ mappedSticker }) {

  const { BoardStickerModalWraper } = useContext(MainContext)


  return (
    <BoardStickerModalWraper
      mappedSticker={mappedSticker}
    >
      <div className={styles.content}>
        <DeleteButton mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWraper>
  )
}
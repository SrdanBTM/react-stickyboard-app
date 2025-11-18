


import styles from './stickerOnSearchedStickersPanel.module.css'
import { useRef, useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'
import StickerHeader from '../../../sticker-parts/board-sticker-parts/board-sticker-header/BoardStickerHeader.jsx'
import StickerNote from '../../../sticker-parts/board-sticker-parts/board-sticker-note/BoardStickerNote.jsx'
import StickerFooter from '../../../sticker-parts/board-sticker-parts/board-sticker-footer/BoardStickerFooter.jsx'
import { motion } from 'framer-motion'


export default function StickerOnSearchedStickersPanel({ mappedSticker }) {

  const stickerRef = useRef()
  const { checkedStickerId } = useContext(MainContext)

  return (
    <motion.div
      data-id={mappedSticker.stickerId}
      className={styles.container}
      ref={stickerRef}
      style={{
        backgroundColor: mappedSticker.color
      }}
      animate={{
        scale: checkedStickerId === mappedSticker.stickerId ? 0 : 1
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
    >
      <StickerHeader mappedSticker={mappedSticker} />
      <StickerNote mappedSticker={mappedSticker} />
      <StickerFooter mappedSticker={mappedSticker} />
    </motion.div>
  )
}
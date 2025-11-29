

import styles from './boardStickerAddDateTime.module.css'
import Inputs from './inputs/Inputs.jsx'
import Message from './message/Message.jsx'
import Buttons from './buttons/Buttons.jsx'


export default function BoardStickerAddDateTime({ mappedSticker }) {

  return (
    <div
      className={styles.container}
      style={{
        transform: mappedSticker.isAddDateTimeOpen ? 'scale(1)' : 'scale(0)',
        transition: 'transform 0.3s ease',
        backgroundColor: mappedSticker.color
      }}
    >
      <div className={styles.content}>
        <Inputs mappedSticker={mappedSticker} />
        <Message mappedSticker={mappedSticker} />
        <Buttons mappedSticker={mappedSticker} />
      </div>
    </div>
  )
}
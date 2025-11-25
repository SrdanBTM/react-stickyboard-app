

import styles from './boardStickerAddDateTime.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'
import Inputs from './inputs/Inputs.jsx'
import EnteredValue from './entered-value/EnteredValue.jsx'
import Buttons from './buttons/Buttons.jsx'


export default function BoardStickerAddDateTime({ mappedSticker }) {

  const { isAddDateOpen } = useContext(MainContext)





  return (
    <div
      className={styles.container}
      style={{
        transform: isAddDateOpen === mappedSticker.stickerId ? 'scale(1)' : 'scale(0)',
        transition: 'transform 0.3s ease',
        backgroundColor: mappedSticker.color
      }}
    >
      <div className={styles.content}>
        <Inputs />
        <br/>
        <EnteredValue />
        <br/>
        <Buttons />
      </div>
    </div>
  )
}
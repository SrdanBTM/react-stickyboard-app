

import styles from './pin.module.css'
import { useState, useContext, useRef } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function Pin({ dragControl, mappedSticker }) {

  const BASE_URL = import.meta.env.BASE_URL
  const [isUnpined, setIsUnpined] = useState(false)
  const { theme } = useContext(MainContext)


  function handleMouseDown(e) {
    setIsUnpined(true)
    dragControl.start(e)
  }

  function handleMouseUp() {
    setIsUnpined(false)
  }



  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={styles.container}
      style={{
        transform: isUnpined ? 'translateY(-5px)' : ''
      }}
    >
      <div className={styles.image}>
        <img
          src={
            isUnpined
              ? theme === 'lightTheme'
                ? `${BASE_URL}images/icon-pin4.png`
                : `${BASE_URL}images/icon-pin6.png`
              : theme === 'lightTheme'
                ? `${BASE_URL}images/icon-pin3.png`
                : `${BASE_URL}images/icon-pin5.png`
          }
          alt="pin icon" />
      </div>
    </div>
  )
}


import styles from './stickersPanelWrapper.module.css'
import { useContext } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'


export default function StickersPanelWrapper({ variant, children }) {

  const { boardRef } = useContext(MainContext)

  return (
    <div
      className={`${styles.container} ${styles[variant]}`}
      ref={boardRef}
    >
      {children}
    </div>
  )
}
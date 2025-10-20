

import styles from './boardNameDots.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'

export default function boardNameDots({ handleClickDots }) {

  const { theme } = useContext(MainContext)

  const BASE_URL = import.meta.env.BASE_URL


  return (
    <div
      className={styles.dots}
      onClick={handleClickDots}
    >
      <img src={
        theme === 'darkTheme'
          ? `${BASE_URL}images/icon-dots2.png`
          : `${BASE_URL}images/icon-dots1.png`}
        alt="edit" />
    </div>
  )
}
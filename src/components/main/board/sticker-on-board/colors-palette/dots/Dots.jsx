

import styles from './dots.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'

export default function Dots() {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme } = useContext(MainContext)

  return (
    <div
      className={styles.container}
    >
      <img
        src={`${BASE_URL}${theme === 'lightTheme' ? 'images/icon-dots3.png' : 'images/icon-dots4.png'}`}
        alt="dots icon" />
    </div>
  )
}
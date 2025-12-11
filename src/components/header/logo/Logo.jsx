
import styles from './logo.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext.jsx'

export default function Logo() {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <img
        src={`${BASE_URL}${theme === 'darkTheme' ? 'images/icon-logo3.png' : 'images/icon-logo4.png'}`}
        alt="logo image" />
      <span>StickyBoard</span>
    </div>
  )
}
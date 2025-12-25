
import styles from './logo.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext.jsx'

export default function Logo() {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <img
        src='images/logo.png'
        alt="logo image" />
    </div>
  )
}
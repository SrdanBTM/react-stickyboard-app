

import styles from './userIcon.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'

export default function UserIcon() {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme } = useContext(MainContext)

  
  return (
    <div className={styles.container}>
      <img
        src={theme === 'darkTheme'
          ? `${BASE_URL}images/icon-user2.png`
          : `${BASE_URL}images/icon-user1.png`}
        alt="user icon" />
    </div>
  )
}
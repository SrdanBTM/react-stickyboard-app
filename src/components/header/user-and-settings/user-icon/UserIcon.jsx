

import styles from './userIcon.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../contexts/ThemeContext.jsx'


export default function UserIcon({ setClickedElement }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme } = useContext(ThemeContext)


  function handleClick(e) {
    setClickedElement(prev => {
      return (
        {
          elementName: 'user',
          showUser: !prev.showUser,
          showSettings: false
        }
      )
    })
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
      data-id={'userIcon'}
    >
      <img
        src={theme === 'darkTheme'
          ? `${BASE_URL}images/icon-user2.png`
          : `${BASE_URL}images/icon-user1.png`}
        alt="user icon" />
    </div>
  )
}
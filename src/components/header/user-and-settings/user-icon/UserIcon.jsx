

import styles from './userIcon.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'


export default function UserIcon({ setClickedElement, userIconRef }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme, clickedElementOnApp } = useContext(MainContext)



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
      ref={userIconRef}
      onClick={handleClick}
    >
      <img
        src={theme === 'darkTheme'
          ? `${BASE_URL}images/icon-user2.png`
          : `${BASE_URL}images/icon-user1.png`}
        alt="user icon" />
    </div>
  )
}
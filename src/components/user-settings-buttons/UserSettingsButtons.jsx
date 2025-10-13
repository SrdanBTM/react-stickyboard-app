

import styles from './userSettingsButtons.module.css'
import Settings from '../settings/Settings.jsx'
import User from '../user/User.jsx'
import { useState } from 'react'

export default function UserSettings() {

  const BASE_URL = import.meta.env.BASE_URL

  const [clickedElement, setClickedElement] = useState({
    elementName: null,
    showUser: false,
    showSettings: false
  })

  function handleClickUser() {
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

  function handleClickSettings() {
    setClickedElement(prev => {
      return (
        {
          elementName: 'settings',
          showSettings: !prev.showSettings,
          showUser: false
        }
      )
    })
  }

  return (
    <div className={styles.userSettings}>
      <div className={styles.user} onClick={handleClickUser} >
        <img src={`${BASE_URL}images/icon-user2.png`} alt="user icon" />
        <User
          clickedElement={clickedElement}
        />
      </div>

      <div className={styles.settings} onClick={handleClickSettings}>
        <img src={`${BASE_URL}images/icon-settings2.png`} alt="settings icon" />
        <Settings
          clickedElement={clickedElement}
        />
      </div>
    </div>
  )
}
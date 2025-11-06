

import { useState } from 'react'
import styles from './userSettingsButtons.module.css'
import Settings from './settings/Settings.jsx'
import SettingsIcon from './settings-icon/SettingsIcon.jsx'
import User from './user/User.jsx'
import UserIcon from './user-icon/UserIcon.jsx'


export default function UserSettings() {

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
    <div className={styles.container}>
      <div className={styles.user} onClick={handleClickUser} >
        <UserIcon />
        <User clickedElement={clickedElement} />
      </div>

      <div className={styles.settings} onClick={handleClickSettings}>
        <SettingsIcon />
        <Settings clickedElement={clickedElement} />
      </div>
    </div>
  )
}
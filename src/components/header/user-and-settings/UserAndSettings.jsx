

import { useState } from 'react'
import styles from './userAndSettings.module.css'
import SettingsMenu from './settings-menu/SettingsMenu.jsx'
import SettingsIcon from './settings-icon/SettingsIcon.jsx'
import UserMenu from './user-menu/UserMenu.jsx'
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
        <UserMenu clickedElement={clickedElement} />
      </div>

      <div className={styles.settings} onClick={handleClickSettings}>
        <SettingsIcon />
        <SettingsMenu clickedElement={clickedElement} />
      </div>
    </div>
  )
}


import styles from './userSettingsButtons.module.css'
import Settings from './settings/Settings.jsx'
import User from './user/User.jsx'
import { useState, useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'


export default function UserSettings() {

  const BASE_URL = import.meta.env.BASE_URL

  const { theme } = useContext(MainContext)

  const [clickedElement, setClickedElement] = useState({
    elementName: null,
    showUser: false,
    showSettings: false
  })

  const icons = {
    userDark: `${BASE_URL}images/icon-user2.png`,
    userLight: `${BASE_URL}images/icon-user1.png`,
    settingsDark: `${BASE_URL}images/icon-settings2.png`,
    settingsLight: `${BASE_URL}images/icon-settings1.png`
  }

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
        <img
          src={theme === 'darkTheme' ? icons.userDark : icons.userLight}
          alt="user icon" />
        <User
          clickedElement={clickedElement}
        />
      </div>

      <div className={styles.settings} onClick={handleClickSettings}>
        <img
          src={theme === 'darkTheme' ? icons.settingsDark : icons.settingsLight}
          alt="settings icon" />
        <Settings
          clickedElement={clickedElement}
        />
      </div>
    </div>
  )
}
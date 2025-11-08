

import styles from './settingsIcon.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'


export default function SettingsIcon({ setClickedElement }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme } = useContext(MainContext)


  function handleClick(e) {
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
    <div
      className={styles.container}
      onClick={handleClick}
      data-id={'settingsIcon'}
    >
      <img
        src={theme === 'darkTheme'
          ? `${BASE_URL}images/icon-settings2.png`
          : `${BASE_URL}images/icon-settings1.png`}
        alt="settings icon" />
    </div>
  )
}
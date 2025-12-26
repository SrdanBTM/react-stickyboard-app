


import styles from './settingsIcon.module.css'
import { IconSettings } from '../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../../contexts/ThemeContext.jsx'


export default function SettingsIcon({ setClickedElement }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme } = useContext(ThemeContext)


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
      className={`${styles.container} icon iconNormal`}
      onClick={handleClick}
      data-id={'settingsIcon'}
    >
      <IconSettings />
    </div>
  )
}
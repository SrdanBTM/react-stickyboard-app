


import styles from './settingsButton.module.css'
import { IconSettings } from '../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../../contexts/ThemeContext.jsx'


export default function SettingsButton({ setClickedElement }) {

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
    <button
      className={`${styles.container} icon iconNormal`}
      onClick={handleClick}
      data-id={'settingsIcon'}
      title='settings'
    >
      <IconSettings />
    </button>
  )
}
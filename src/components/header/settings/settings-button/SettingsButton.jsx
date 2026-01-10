


import styles from './settingsButton.module.css'
import { IconSettings } from '../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../../../../contexts/ThemeContext.jsx'


export default function SettingsButton({ setIsSettingsMenuShow }) {

  const { theme } = useContext(ThemeContext)


  function handleClick() {
    setIsSettingsMenuShow(prev => !prev)
  }

  
  return (
    <button
      className={`${styles.container} icon iconNormal`}
      title='settings'
      onClick={handleClick}
    >
      <IconSettings />
    </button>
  )
}
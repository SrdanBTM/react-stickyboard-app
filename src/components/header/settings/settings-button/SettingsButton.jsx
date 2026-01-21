


import styles from './settingsButton.module.css'
import { IconSettings } from '../../../../icons/Icons.jsx'


export default function SettingsButton({ setIsSettingsMenuShow }) {


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


import { useState } from 'react'
import styles from './settings.module.css'
import SettingsMenu from './settings-menu/SettingsMenu.jsx'
import SettingsButton from './settings-button/SettingsButton.jsx'


export default function Settings() {

  const [isSettingsMenuShow, setIsSettingsMenuShow] = useState(false)


  return (
    <div
      className={styles.container}
      data-id='settings'
    >
      <SettingsButton setIsSettingsMenuShow={setIsSettingsMenuShow} />
      <SettingsMenu isSettingsMenuShow={isSettingsMenuShow} setIsSettingsMenuShow={setIsSettingsMenuShow} />
    </div>
  )
}
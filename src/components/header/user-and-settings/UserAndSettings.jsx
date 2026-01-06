

import { useContext, useState, useEffect } from 'react'
import styles from './userAndSettings.module.css'
import SettingsMenu from './settings-menu/SettingsMenu.jsx'
import SettingsButton from './settings-button/SettingsButton.jsx'
import { ClickOutsideElementContext } from '../../../contexts/ClickOutsideElementContext.jsx'


export default function UserAndSettings() {

  const { isClickedOutsideUserAndSettings } = useContext(ClickOutsideElementContext)


  const initClickedElement = {
    elementName: null,
    showUser: false,
    showSettings: false
  }
  const [clickedElement, setClickedElement] = useState(initClickedElement)


  useEffect(() => {
    if (isClickedOutsideUserAndSettings) {
      setClickedElement(initClickedElement)
    }
  }, [isClickedOutsideUserAndSettings])


  return (
    <div className={styles.container}>

      <div className={styles.settings}>
        <SettingsButton setClickedElement={setClickedElement} />
        <SettingsMenu
          setClickedElement={setClickedElement}
          clickedElement={clickedElement}
        />
      </div>

    </div>
  )
}
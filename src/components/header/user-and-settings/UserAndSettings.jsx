

import { useContext, useState, useRef, useEffect } from 'react'
import styles from './userAndSettings.module.css'
import SettingsMenu from './settings-menu/SettingsMenu.jsx'
import SettingsIcon from './settings-icon/SettingsIcon.jsx'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'


export default function UserAndSettings() {

  const { isClickedOutsideUserAndSettings } = useContext(MainContext)


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
        <SettingsIcon setClickedElement={setClickedElement} />
        <SettingsMenu
          setClickedElement={setClickedElement}
          clickedElement={clickedElement}
        />
      </div>

    </div>
  )
}
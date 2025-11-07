

import { useContext, useState, useRef, useEffect } from 'react'
import styles from './userAndSettings.module.css'
import SettingsMenu from './settings-menu/SettingsMenu.jsx'
import SettingsIcon from './settings-icon/SettingsIcon.jsx'
import UserMenu from './user-menu/UserMenu.jsx'
import UserIcon from './user-icon/UserIcon.jsx'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'


export default function UserAndSettings() {

  const { clickedElementOnApp } = useContext(MainContext)

  const settingsIconRef = useRef()
  const userIconRef = useRef()

  const initClickedElement = {
    elementName: null,
    showUser: false,
    showSettings: false
  }
  const [clickedElement, setClickedElement] = useState(initClickedElement)


  useEffect(()=>{
    if (clickedElementOnApp !== settingsIconRef.current
      && clickedElementOnApp !== userIconRef.current
    ) {
      setClickedElement(initClickedElement)
    }
  },[clickedElementOnApp])


  return (
    <div className={styles.container}>

      <div className={styles.user}>
        <UserIcon
          setClickedElement={setClickedElement}
          userIconRef={userIconRef}
        />
        <UserMenu
          clickedElement={clickedElement}
        />
      </div>

      <div className={styles.settings}>
        <SettingsIcon
          setClickedElement={setClickedElement}
          settingsIconRef={settingsIconRef}
        />
        <SettingsMenu
          setClickedElement={setClickedElement}
          clickedElement={clickedElement}
          initClickedElement={initClickedElement}
        />
      </div>

    </div>
  )
}
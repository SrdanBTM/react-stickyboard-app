

import { useState, useRef, useEffect } from 'react'
import styles from './userAndSettings.module.css'
import SettingsMenu from './settings-menu/SettingsMenu.jsx'
import SettingsIcon from './settings-icon/SettingsIcon.jsx'
import UserMenu from './user-menu/UserMenu.jsx'
import UserIcon from './user-icon/UserIcon.jsx'


export default function UserAndSettings() {

  const [clickedElement, setClickedElement] = useState({
    elementName: null,
    showUser: false,
    showSettings: false
  })

  const userIconRef = useRef()
  const userMenuRef = useRef()
  const settingsIconRef = useRef()
  const settingsMenuRef = useRef()


  useEffect(() => {
    function handleClickOutside(e) {
      if (e.target !== userIconRef.current
        && e.target !== settingsIconRef.current
        && e.target.parentElement !== userMenuRef.current
        && e.target.parentElement !== settingsMenuRef.current
      ) {
        setClickedElement({
          elementName: null,
          showUser: false,
          showSettings: false
        })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])


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
    <div className={styles.container}>

      <div
        className={styles.user}
        onClick={handleClickUser}
        ref={userIconRef}
      >
        <UserIcon />
        <UserMenu userMenuRef={userMenuRef} clickedElement={clickedElement} />
      </div>

      <div
        className={styles.settings}
        onClick={handleClickSettings}
        ref={settingsIconRef}
      >
        <SettingsIcon />
        <SettingsMenu settingsMenuRef={settingsMenuRef} clickedElement={clickedElement} />
      </div>

    </div>
  )
}
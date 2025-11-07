

import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'
import styles from './settingsMenu.module.css'

export default function Settings({ settingsMenuRef, clickedElement }) {

  const { setTheme } = useContext(MainContext)

  const showElement = clickedElement.elementName === 'settings' && clickedElement.showSettings

  function handleClick() {
    setTheme(prev => prev === 'darkTheme' ? 'lightTheme' : 'darkTheme')
  }

  return (
    <div
      className={styles.container}
      style={{
        opacity: showElement ? 1 : 0,
        pointerEvents: showElement ? 'auto' : 'none'
      }}
    >
      <ul ref={settingsMenuRef}>
        <li onClick={handleClick}>Change theme</li>
      </ul>
    </div>

  )
}
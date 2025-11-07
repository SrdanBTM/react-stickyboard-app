

import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'
import styles from './settingsMenu.module.css'


export default function SettingsMenu({ setClickedElement, clickedElement, initClickedElement }) {

  const { setTheme } = useContext(MainContext)

  const showElement = clickedElement.elementName === 'settings' && clickedElement.showSettings


  function handleClick() {
    setTheme(prev => prev === 'darkTheme' ? 'lightTheme' : 'darkTheme')
    setClickedElement(initClickedElement)
  }


  return (
    <div
      className={styles.container}
      onClick={e => e.stopPropagation()}
      style={{
        opacity: showElement ? 1 : 0,
        pointerEvents: showElement ? 'auto' : 'none'
      }}
    >
      <ul>
        <li onClick={handleClick}>Change theme</li>
      </ul>
    </div>

  )
}
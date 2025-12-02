

import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'
import styles from './settingsMenu.module.css'


export default function SettingsMenu({ clickedElement }) {

  const { theme, setTheme, isCheckedStickersPanelShow, setIsCheckedStickersPanelShow, } = useContext(MainContext)
  const showElement = clickedElement.elementName === 'settings' && clickedElement.showSettings

  function handleClickChangeTheme() {
    setTheme(prev => prev === 'darkTheme' ? 'lightTheme' : 'darkTheme')
  }

  function handleClickHideCheckedStickersPanel() {
    setIsCheckedStickersPanelShow(prev => !prev)
  }


  return (
    <div
      className={styles.container}
      style={{
        opacity: showElement ? 1 : 0,
        pointerEvents: showElement ? 'auto' : 'none'
      }}
    >
      <ul data-id={'settingsMenu'}>
        <li onClick={handleClickChangeTheme}>{theme === 'darkTheme' ? 'Set Light Theme' : 'Set Dark Theme'}</li>
        <li onClick={handleClickHideCheckedStickersPanel}>{isCheckedStickersPanelShow ? 'Hide Checked Stickers Panel' : 'Show Checked Stickers Panel'}</li>
      </ul>
    </div>

  )
}
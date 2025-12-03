

import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'
import styles from './settingsMenu.module.css'


export default function SettingsMenu({ clickedElement }) {

  const { setBoards, theme, setTheme, isCheckedStickersPanelShow, setIsCheckedStickersPanelShow, setIsDeleteAllCheckedStickersModalOpen } = useContext(MainContext)
  const showElement = clickedElement.elementName === 'settings' && clickedElement.showSettings

  function handleClickChangeTheme() {
    setTheme(prev => prev === 'darkTheme' ? 'lightTheme' : 'darkTheme')
  }

  function handleClickHideCheckedStickersPanel() {
    setIsCheckedStickersPanelShow(prev => !prev)
  }

  function handleClickDeleteAllCheckedStickers() {
    setIsDeleteAllCheckedStickersModalOpen(true)
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
        <li onClick={handleClickHideCheckedStickersPanel}>{isCheckedStickersPanelShow ? 'Hide Checked Stickers' : 'Show Checked Stickers'}</li>
        <li onClick={handleClickDeleteAllCheckedStickers}>Delete All Checked Stickers</li>
        <li onClick={handleClickChangeTheme}>{theme === 'darkTheme' ? 'Set Light Theme' : 'Set Dark Theme'}</li>
      </ul>
    </div>

  )
}
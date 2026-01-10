

import { useContext } from 'react'
import { MainContext } from '../../../../contexts/MainContext.jsx'
import { ClickOutsideElementContext } from '../../../../contexts/ClickOutsideElementContext.jsx'
import { AppModalsContext } from '../../../../contexts/AppModalsContext.jsx'
import { ThemeContext } from '../../../../contexts/ThemeContext.jsx'
import styles from './settingsMenu.module.css'


export default function SettingsMenu({ isSettingsMenuShow, setIsSettingsMenuShow }) {

  const { boards, isCheckedStickersPanelShow, setIsCheckedStickersPanelShow } = useContext(MainContext)
  const { isClickedOutsideSettings } = useContext(ClickOutsideElementContext)
  const { setOpenedAppModal } = useContext(AppModalsContext)
  const { theme, setTheme } = useContext(ThemeContext)


  function handleClickChangeTheme() {
    setTheme(prev => prev === 'darkTheme' ? 'lightTheme' : 'darkTheme')
    setIsSettingsMenuShow(false)
  }

  function handleClickHideCheckedStickersPanel() {
    setIsCheckedStickersPanelShow(prev => !prev)
    setIsSettingsMenuShow(false)
  }

  function handleClickDeleteAllCheckedStickers() {
    const isThereBoardWithCheckedStickers = boards.some(board => board.isThereCheckedSticker)

    isThereBoardWithCheckedStickers
      ? setOpenedAppModal('DeleteAllCheckedStickersModal')
      : setOpenedAppModal('MessageNoCheckedStickerToDeleteModal')

    setIsSettingsMenuShow(false)
  }


  return (
    <div
      className={`
      ${styles.container} 
      ${isSettingsMenuShow && !isClickedOutsideSettings ? styles.showMenu : styles.hideMenu}
      `}
    >
      <ul>
        <li onClick={handleClickHideCheckedStickersPanel}>{isCheckedStickersPanelShow ? 'Hide Checked Stickers' : 'Show Checked Stickers'}</li>
        <li onClick={handleClickDeleteAllCheckedStickers}>Delete All Checked Stickers</li>
        <li onClick={handleClickChangeTheme}>{theme === 'darkTheme' ? 'Set Light Theme' : 'Set Dark Theme'}</li>
      </ul>
    </div>

  )
}
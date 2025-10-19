
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'
import styles from './settings.module.css'

export default function Settings({ clickedElement }) {

  const { setTheme } = useContext(MainContext)

  const showElement = clickedElement.elementName === 'settings' && clickedElement.showSettings

  function handleClickMode() {
    setTheme(prev => prev === 'darkTheme' ? 'lightTheme' : 'darkTheme')
  }

  return (
    <ul
      className={styles.container}
      style={{
        opacity: showElement ? 1 : 0,
        pointerEvents: showElement ? 'auto' : 'none'
      }}
    >
      <li onClick={handleClickMode}>Change theme</li>
    </ul>
  )
}
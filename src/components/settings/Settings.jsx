

import styles from './settings.module.css'

export default function Settings({ clickedElement }) {

  const showElement = clickedElement.elementName === 'settings' && clickedElement.showSettings

  return (
    <ul
      className={styles.container}
      style={{
        opacity: showElement ? 1 : 0,
        pointerEvents: showElement ? 'auto' : 'none'
      }}
    >
      <li>Change mode</li>
    </ul>
  )
}


import styles from './userMenu.module.css'


export default function User({ clickedElement }) {

  const showElement = clickedElement.elementName === 'user' && clickedElement.showUser

  return (
    <ul
      className={styles.container}
      style={{ 
        opacity: showElement ? 1 : 0,
        pointerEvents: showElement ? 'auto' : 'none'
      }}
    >
      <li>Change account</li>
      <li>Add acocunt</li>
      <li>Log out</li>
    </ul>
  )
}
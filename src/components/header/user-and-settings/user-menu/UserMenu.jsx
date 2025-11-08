

import styles from './userMenu.module.css'


export default function UserMenu({ clickedElement }) {
  
  const showElement = clickedElement.elementName === 'user' && clickedElement.showUser

  return (
    <div
      className={styles.container}
      style={{
        opacity: showElement ? 1 : 0,
        pointerEvents: showElement ? 'auto' : 'none'
      }}
    >
      <ul data-id={'userMenu'}>
        <li>Change account</li>
        <li>Add acocunt</li>
        <li>Log out</li>
      </ul>
    </div>
  )
}


import styles from './header.module.css'
import Logo from '../logo/Logo.jsx'
import Filter from '../filter/Filter.jsx'
import UserSettings from '../user-settings/UserSettings.jsx'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Filter />
      <UserSettings />
    </header>
  )
}
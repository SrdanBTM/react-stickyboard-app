

import styles from './header.module.css'
import Logo from './logo/Logo.jsx'
import Filter from './filter/Filter.jsx'
import UserAndSettings from './user-and-settings/UserAndSettings.jsx'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Filter />
      <UserAndSettings />
    </header>
  )
}
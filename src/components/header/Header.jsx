

import styles from './header.module.css'
import Logo from './logo/Logo.jsx'
import Filter from './filter/Filter.jsx'
import UserSettingsButtons from './user-settings-buttons/UserSettingsButtons.jsx'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Filter />
      <UserSettingsButtons />
    </header>
  )
}
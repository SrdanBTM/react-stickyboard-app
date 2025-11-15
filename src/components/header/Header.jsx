

import styles from './header.module.css'
import Logo from './logo/Logo.jsx'
import SearchBar from './search-bar/SearchBar.jsx'
import UserAndSettings from './user-and-settings/UserAndSettings.jsx'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar />
      <UserAndSettings />
    </header>
  )
}
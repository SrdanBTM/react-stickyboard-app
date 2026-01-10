

import styles from './header.module.css'
import Logo from './logo/Logo.jsx'
import SearchBar from './search-bar/SearchBar.jsx'
import Filter from './filter/Filter.jsx'
import Settings from './settings/Settings.jsx'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar />
      <Filter />
      <Settings />
    </header>
  )
}
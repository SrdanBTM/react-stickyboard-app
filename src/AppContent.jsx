

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import { useContext } from 'react'
import { ClickOutsideElementContext } from './contexts/ClickOutsideElementContext.jsx'
import { MainContext } from './context-provider/ContextProvider.jsx'


export default function AppContent() {

  const { setClickedElementOnApp } = useContext(ClickOutsideElementContext)
  const { theme } = useContext(MainContext)


  function handleClick(e) {
    setClickedElementOnApp(e.target)
  }


  return (
    <div
      className={`app ${theme}`}
      style={{ overflow: 'hidden' }}
      onClick={handleClick}
    >

      <Header />
      <Main />

    </div>
  )
}
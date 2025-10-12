

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'

import { MainProvider } from './context-provider/ContextProvider.jsx'

import { useState } from 'react'


export default function App() {

  const [boards, setBoards] = useState([])

  return (
    <MainProvider value={{ boards, setBoards }}>
      <div className='app darkTheme'>
        <Header />
        <Main />
      </div>
    </MainProvider>

  )
}
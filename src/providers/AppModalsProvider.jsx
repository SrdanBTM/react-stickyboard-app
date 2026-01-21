

import { AppModalsContext } from '../contexts/AppModalsContext.jsx'
import { useState } from 'react'


export default function AppModalsProvider({ children }) {

  const [openedAppModal, setOpenedAppModal] = useState(null)
  const [boardToDeleteId, setBoardToDeleteId] = useState(null)


  return (
    <AppModalsContext.Provider
      value={{ 
        openedAppModal, setOpenedAppModal ,
        boardToDeleteId, setBoardToDeleteId
      }}
    >
      {children}
    </AppModalsContext.Provider>
  )
}
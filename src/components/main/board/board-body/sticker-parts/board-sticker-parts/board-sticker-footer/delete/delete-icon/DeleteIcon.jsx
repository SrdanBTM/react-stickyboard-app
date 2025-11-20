


import styles from './deleteIcon.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function DeleteSticker() {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme } = useContext(MainContext)

  
  return (
    <div className={styles.container}>
      <img
        src={`${BASE_URL}${theme === 'lightTheme' ? 'images/icon-delete5.png' : 'images/icon-delete5.png'}`}
        alt="delete" />
    </div>
  )
}
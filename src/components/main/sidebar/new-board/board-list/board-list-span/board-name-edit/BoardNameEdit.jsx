

import styles from './boardNameEdit.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider'

export default function BoardsListEdit({ handleClickEdit }) {

  const { theme } = useContext(MainContext)

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div
      className={styles.container}
      onClick={handleClickEdit}
    >
      <img src={
        theme === 'darkTheme'
          ? `${BASE_URL}images/icon-edit2.png`
          : `${BASE_URL}images/icon-edit1.png`}
        alt="edit" />
    </div>
  )
}
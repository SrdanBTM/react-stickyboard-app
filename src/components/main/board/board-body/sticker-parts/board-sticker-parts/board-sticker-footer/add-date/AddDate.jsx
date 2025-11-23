
import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'
import styles from './addDate.module.css'
import AddDateIcon from './add-date-icon/AddDateIcon.jsx'


export default function AddDate({ mappedSticker }) {

  const { } = useContext(MainContext)


  return (
    <div
      className={styles.container}
    >
      <AddDateIcon />
    </div>
  )
}





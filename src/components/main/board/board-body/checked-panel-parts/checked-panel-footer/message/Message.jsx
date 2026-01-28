

import styles from './message.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../.././../../../contexts/MainContext.jsx'


export default function Message() {

  const { currentPageOnCheckedPanelBody, numberOfPagesOnCheckedPanelBody } = useContext(MainContext)
  console.log(currentPageOnCheckedPanelBody);
  

  return (
    <div className={styles.container}>
      <span>
        {currentPageOnCheckedPanelBody} / {numberOfPagesOnCheckedPanelBody}
      </span>
    </div>
  )
}
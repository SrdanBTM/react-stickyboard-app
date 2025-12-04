

import styles from './datedButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'


export default function DatedButton() {

  const { filterDatedTitle } = useContext(MainContext)


  return (
    <div className={styles.container}>
      <button>
        {`Dated - ${filterDatedTitle}`}
      </button>
    </div>
  )
}
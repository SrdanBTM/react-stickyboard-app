

import styles from './modals.module.css'
import Title from './modal-parts/title/Title.jsx'
import InputsDate from './modal-parts/inputs-date-time/InputsDate.jsx'
import InputsTime from './modal-parts/inputs-date-time/InputsTime.jsx'
import Message from './modal-parts/message/Message.jsx'
import SaveButton from './modal-parts/buttons/SaveButton.jsx'
import RemoveButton from './modal-parts/buttons/RemoveButton.jsx'


export default function AddDateTimeModal({ mappedSticker }) {

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker.color,
      }}
    >

      <div className={styles.header}>
        <Title title='Add Date and Time' />
      </div>

      <div className={styles.body}>
        <InputsDate mappedSticker={mappedSticker} />
        <InputsTime mappedSticker={mappedSticker} />
        <Message mappedSticker={mappedSticker} />

        <div className={styles.buttons}>
          <SaveButton mappedSticker={mappedSticker} />
          <RemoveButton mappedSticker={mappedSticker} />
        </div>
      </div>

    </div>
  )
}
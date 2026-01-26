

import styles from './checkedPanelBase.module.css'
import CheckedPanelBody from '../checked-panel-parts/checked-panel-body/CheckedPanelBody.jsx'
import CheckedPanelHeader from '../checked-panel-parts/checked-panel-header/CheckedPanelHeader.jsx'
import CheckedPanelHover from '../checked-panel-parts/checked-panel-hover/CheckedPanelHover.jsx'
import CheckedPanelMessage from '../checked-panel-parts/checked-panel-message/CheckedPanelMessage.jsx'
import { useContext, useState } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'



export default function CheckedPanelBase({ stickersToShowOnCheckedPanel }) {

  const [isCheckedStickersPanelHover, setIsCheckedStickersPanelHover] = useState()
  const { isCheckedStickersPanelShow } = useContext(MainContext)
  const [isHoverTitleShow, setIsHoverTitleShow] = useState(true)


  function handleMouseOver() {
    setIsCheckedStickersPanelHover(true)
    setIsHoverTitleShow(false)
  }


  function handleMouseLeave() {
    setIsCheckedStickersPanelHover(false)
    setTimeout(() => {
      setIsHoverTitleShow(true)
    }, 300)
  }


  return (
    <div
      className={styles.container}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{
        position: isCheckedStickersPanelShow ? '' : 'absolute',
        top: isCheckedStickersPanelShow ? '' : '0px',
        bottom: isCheckedStickersPanelShow ? '' : '0px',
        right: isCheckedStickersPanelShow || isCheckedStickersPanelHover ? '0' : '-210px'
      }}
    >
      <CheckedPanelHeader />

      {stickersToShowOnCheckedPanel.length > 0
        ? <CheckedPanelBody stickersToShowOnCheckedPanel={stickersToShowOnCheckedPanel} />
        : <CheckedPanelMessage />}

      <CheckedPanelHover
        isHoverTitleShow={isHoverTitleShow}
        isCheckedStickersPanelShow={isCheckedStickersPanelShow}
      />

    </div>
  )
}
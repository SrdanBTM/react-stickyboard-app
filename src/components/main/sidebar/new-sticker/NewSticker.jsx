
import styles from './newSticker.module.css'
import { useContext, useRef, useEffect, useState } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'

export default function NewSticker() {

  const {
    isStickerDrag, setIsStickerDrag,
    draggedStickerPosition, setDraggedStickerPosition
  } = useContext(MainContext)


  const [mousePositionRelativeSticker, setMousePositionRelativeSticker] = useState({ x: null, y: null })
  const newStickerRef = useRef()


  function handleMouseDown(e) {
    setIsStickerDrag(true)

    const stickerPosition = newStickerRef.current.getBoundingClientRect()

    setMousePositionRelativeSticker({
      // mouse position relative to sticker (click offset inside sticker)
      x: e.clientX - stickerPosition.x,
      y: e.clientY - stickerPosition.y
    })
  }


  useEffect(() => {
    if (isStickerDrag === false) return

    const stickerPosition = newStickerRef.current.getBoundingClientRect()

    function handleMouseMove(e) {
      setDraggedStickerPosition({
        // (mouse position relative to window) - (sticker's initial position) - (click offset inside sticker)
        x: e.clientX - stickerPosition.x - mousePositionRelativeSticker.x,
        y: e.clientY - stickerPosition.y - mousePositionRelativeSticker.y
      })
    }

    function handleMouseUp() {
      setIsStickerDrag(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

  }, [isStickerDrag])


  return (
    <div className={styles.container}>

      <div className={styles.heading}>
        <span>Stickers</span>
      </div>

      <div className={styles.stack}>
        <div className={styles.remainingStickers}>

        </div>

        <div
          className={styles.takenSticker}
          onMouseDown={handleMouseDown}
          ref={newStickerRef}
          style={{ top: draggedStickerPosition.y, left: draggedStickerPosition.x }}
        >
        </div>
      </div>

    </div>
  )
}



export function handleStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal, mappedSticker) {
  
  if (mappedSticker[currentModal]) {
    const propertyToUpdate = { key: currentModal, value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  } else {
    const propertyToUpdate1 = { key: 'isDeleteModalOpen', value: false }
    const propertyToUpdate2 = { key: 'isAddDateTimeModalOpen', value: false }
    const propertyToUpdate3 = { key: 'isChangeColorModalOpen', value: false }
    const propertyToUpdate4 = { key: currentModal, value: true }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate4)
  }

}
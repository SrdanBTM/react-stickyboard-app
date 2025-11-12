

// UPDATE STICKER
export function updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate) {
  const { key, value } = propertyToUpdate

  if (currentBoardId) {
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? {
            ...board,
            stickers: board.stickers.map((sticker => {
              return (
                sticker.stickerId === currentStickerId
                  ? { ...sticker, [key]: value }
                  : sticker
              )
            }))
          }
          : board
      )
    }))

  } else {
    setBoards(prev => prev.map(board => {
      const hasSticker = board.stickers.some(sticker => sticker.stickerId === currentStickerId)

      if (hasSticker) {
        return {
          ...board,
          stickers: board.stickers.map(sticker =>
            sticker.stickerId === currentStickerId
              ? { ...sticker, [key]: value }
              : sticker
          )
        }
      }

      return board
    }))
  }
}





// UPDATE ALL STICKERS
export function updateAllStickers(setBoards, currentBoardId, propertyToUpdate) {
  const { key, value } = propertyToUpdate

  setBoards(prev => prev.map(board => {
    return (
      board.boardId === currentBoardId
        ? {
          ...board, stickers: board.stickers.map(sticker => {
            return (
              { ...sticker, [key]: value }
            )
          })
        }
        : board
    )
  }))
}





// ADD STICKER
export function addSticker(setBoards, currentBoardId, stickerTemplate, positionXValue, positionYValue) {
  const stickerToAdd = {
    ...stickerTemplate,
    stickerId: crypto.randomUUID(),
    positionX: positionXValue,
    positionY: positionYValue
  }

  setBoards(prev => prev.map(board => {
    return (
      board.boardId === currentBoardId
        ? { ...board, stickers: [...board.stickers, stickerToAdd] }
        : board
    )
  }))
}





// DELETE STICKER
export function deleteSticker(setBoards, currentBoardId, currentStickerId) {
  if (currentBoardId) {
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? {
            ...board,
            stickers: board.stickers.filter(sticker => sticker.stickerId !== currentStickerId)
          }
          : board
      )
    }))

  } else {
    setBoards(prev => prev.map(board => {
      const hasSticker = board.stickers.some(sticker => sticker.stickerId === currentStickerId)

      if (hasSticker) {
        return (
          {
            ...board,
            stickers: board.stickers.filter(sticker => sticker.stickerId != currentStickerId)
          }
        )
      }

      return board
    }))
  }
}




// ADD BOARD
export function addBoard(setBoards, boardTemplate, boardNameValue) {
  const boardToAdd = {
    ...boardTemplate,
    boardId: crypto.randomUUID(),
    boardName: boardNameValue
  }

  setBoards(prev => [...prev, boardToAdd])
}




// UPDATE BOARD
export function updateBoard(setBoards, currentBoardId, propertyToUpdate) {
  const { key, value } = propertyToUpdate
  setBoards(prev => prev.map(board => {
    return (
      board.boardId === currentBoardId
        ? { ...board, [key]: value }
        : board
    )
  }))
}






// UPDATE ALL BOARDS
export function updateAllBoards(setBoards, currentBoardId, propertyTernaryPair) {
  const [propertyTrue, propertyFalse] = propertyTernaryPair
  const { keyTrue, valueTrue } = propertyTrue
  const { keyFalse, valueFalse } = propertyFalse

  setBoards(prev => {
    return (
      prev.map(board => {
        return (
          board.boardId === currentBoardId
            ? { ...board, [keyTrue]: valueTrue }
            : { ...board, [keyFalse]: valueFalse }
        )
      })
    )
  })
}





// DELETE BOARD
export function deleteBoard(setBoards, currentBoardId) {
  setBoards(prev => prev.filter(board => board.boardId !== currentBoardId && board))
}









// ADD BOARD
export function addBoard(setBoards, boardTemplate, boardNameValue) {
  const boardToAdd = {
    ...boardTemplate,
    boardId: crypto.randomUUID(),
    boardName: boardNameValue
  }

  setBoards(prev => [...prev, boardToAdd])

  return boardToAdd.boardId
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






// UPDATE ALL BOARDS - 2 PROPERTIES
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




// UPDATE ALL BOARDS - 1 PROPERTY
export function updateAllBoardsOneProperty(setBoards, propertyToUpdate) {
  const { key, value } = propertyToUpdate
  setBoards(prev => prev.map(board => {
    return (
      {
        ...board,
        [key]: value
      }
    )
  }))
}




// DELETE BOARD AND SET CURRENT BOARD ID
export function deleteBoardAndSetCurrentBoardId(setBoards, currentBoardId, setCurrentBoardId) {
  setBoards(prev => {
    const filtered = prev.filter(board => board.boardId !== currentBoardId)

    if (filtered.length > 0) {
      setCurrentBoardId(filtered[filtered.length - 1].boardId)
    } else {
      setCurrentBoardId(null)
    }

    return filtered
  })
}









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




// DELETE BOARD
export function deleteBoard(setBoards, boardToDeleteId) {
  setBoards(prev => prev.filter(board => board.boardId !== boardToDeleteId))
}




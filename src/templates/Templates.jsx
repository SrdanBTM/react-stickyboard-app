

export const boardTemplate = {
  boardId: '',
  boardName: 'My Board',
  isInput: false,
  isFocused: false,
  zIndexCounter: 0,
  stickers: []
}

export const stickerTemplate = {
  stickerId: '',
  boardId: '',
  title: '',
  note: '',
  color: 'var(--sticker-color1)',
  boardName: '',
  positionX: '',
  positionY: '',
  checked: false,
  checkedOrder: null,
  dateTimeValidValue: {
    day: null,
    month: null,
    year: null,
    hours: null,
    minutes: null,
    dayInWeek: null
  },
  dateTimeCurrentValue: {
    day: null,
    month: null,
    year: null,
    hours: null,
    minutes: null,
  },
  siTryToSaveUnvalidDateTime: false,
  isDateTimeValid: null,
  isAddDateTimeModalOpen: false,
  isDeleteModalOpen: false,
  isChangeColorModalOpen: false,
  zIndex: 0
}



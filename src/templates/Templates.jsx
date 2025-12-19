

export const boardTemplate = {
  boardId: '',
  boardName: 'My Board',
  isInput: false,
  isFocused: false,
  isDeleteShowed: false,
  isThereCheckedSticker: false,
  stickers: []
}

export const stickerTemplate = {
  stickerId: '',
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
  isDateTimeValid: null,
  isAddDateTimeModalOpen: false,
  isDeleteModalOpen: false,
  isChangeColorModalOpen: false,
}



export const selectBook = book => {
  return { payload: book, action: 'SELECTING_BOOK' };
};

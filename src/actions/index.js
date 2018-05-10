export const selectBook = book => {
  return { payload: book, type: 'SELECTING_BOOK' };
};

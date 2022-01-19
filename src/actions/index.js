export const addItem = item => ({
  type: 'ADD_ITEM',
  item,
});
export const itemDone = item => ({
  type: 'ITEM_DONE',
  item,
});
export const itemIncomplete = item => ({
  type: 'ITEM_INCOMPLETE',
  item,
});
export const removeItem = item => ({
  type: 'REMOVE_ITEM',
  item,
});
export const editItem = item => ({
  type: 'EDIT_ITEM',
  item,
});

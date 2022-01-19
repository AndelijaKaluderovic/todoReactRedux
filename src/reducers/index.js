const toDoListReducer = (state =
{ list: localStorage.todo ? JSON.parse(localStorage.todo) : [] }, action) => {
  let updatedArray = JSON.parse(JSON.stringify(state.list));
  const settingItem = () => localStorage.setItem('todo', JSON.stringify(updatedArray));
  const updatedState = state;
  switch (action.type) {
    case 'ADD_ITEM': {
      updatedArray.push(action.item);
      settingItem();
      updatedState.list = updatedArray;
      return { ...updatedState };
    }
    case 'ITEM_DONE':
      updatedArray.forEach(e => {
        if (e.id === action.item.id) {
          e.done = true;
        }
      });
      settingItem();
      updatedState.list = updatedArray;
      return { ...updatedState };

    case 'ITEM_INCOMPLETE':
      updatedArray.forEach(e => {
        if (e.id === action.item.id) {
          e.done = false;
        }
      });
      settingItem();
      updatedState.list = updatedArray;
      return { ...state };

    case 'REMOVE_ITEM': {
      updatedArray.forEach(e => {
        if (e.id === action.item.id) {
          const index = updatedArray.indexOf(e);
          updatedArray.splice(index, 1);
        }
      });
      updatedState.list = updatedArray;
      settingItem();
      return { ...updatedState };
    }
    case 'EDIT_ITEM': {
      updatedArray = updatedArray
        .map(todo => ((todo.id === action.item.id) ? action.item : todo));
      updatedState.list = updatedArray;
      settingItem();
      return { ...updatedState };
    }
    default:
      return { ...updatedState };
  }
};
export default toDoListReducer;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  editItem,
  itemDone,
  itemIncomplete, removeItem,
} from '../actions';

const Todo = ({
  todoItem,
  title,
  description,
}) => {
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editItem({
      ...todoItem, title: editTitle, description: editDescription,
    }));
    // if (!editDescription) {
    //   dispatch(editItem({
    //     ...todoItem, title: editTitle,
    //   }));
    // } else {
    //   dispatch(editItem({
    //     ...todoItem, title: editTitle, description: editDescription,
    //   }));
    // }
    setEdit(false);
  };
  return (
    <li className={todoItem.done ? 'todo__done' : 'todo'}>
      <div className="todo__list">
        {!edit ? <> <h2 className="todo__list-task">{title}</h2>
          <p className="todo__list-description">{description}</p>
        </>
          : <form onSubmit={handleSubmit}>
            <input className="form__input__title" data-testid="title" name="title" type="text" placeholder="Title (required)" defaultValue={title} onChange={ e => {
              setEditTitle(e.target.value);
            }} />
            <input className="form__input__description" data-testid="description" name="description" type="text" placeholder="Description (optional)" defaultValue={description} onChange={ e => setEditDescription(e.target.value) } />
            <input className="submit__edit" type="submit" value="Submit" />
          </form>
        }
      </div>
      <div className="todo__buttons">
        {!todoItem.done ? (<>
          <button className="todo__button-done" onClick={() => dispatch(itemDone(todoItem))}>&#10003;</button>
          {!edit && <button className="todo__button-edit" onClick={() => setEdit(true)}>&#128394;</button>}
        </>)
          : (<>
            <button className="todo__button-done" onClick={() => dispatch(itemIncomplete(todoItem))}>&#8593;</button>
            <button className="todo__button-remove" onClick={() => dispatch(removeItem(todoItem))}>x</button>
          </>)
        }

      </div>
    </li>
  );
};

export default Todo;

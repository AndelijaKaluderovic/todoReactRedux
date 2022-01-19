import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions';

const Form = () => {
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState({
    id: Date.now(),
    title: '',
    description: '',
    done: false,
  });

  const createTodo = e => {
    e.preventDefault();
    if (todoItem.title !== '') {
      setTodoItem({
        ...todoItem, id: Date.now(), title: '', description: '',
      });
      dispatch(addItem(todoItem));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name } = e.target;
    const { value } = e.target;
    setTodoItem({ ...todoItem, [name]: value });
  };

  return (
    <form className="form">
      <input className="form__input__title" data-testid="title" name="title" type="text" placeholder="Title (required)" value={todoItem.title} onChange={handleSubmit} />
      <input className="form__input__description" data-testid="description" name="description" type="text" placeholder="Description (optional)" value={todoItem.description} onChange={handleSubmit} />
      <input className="form__input__submit" data-testid="submit" type="submit" value="add" onClick={createTodo} />
    </form>
  );
};
export default Form;

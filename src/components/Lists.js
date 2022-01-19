import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const Lists = () => {
  const toDoState = useSelector(store => store);
  const [hide, setHide] = useState(false);
  return (
    <div className="list">
      <h2 className="list__h2">My List</h2>
      <ul className="list__todo" id="incompleted">
        {toDoState.list.filter(e => e.done === false).map((todo, index) => (
          <Todo
            todoItem={todo}
            title={todo.title}
            description={todo.description}
            key={index}
          />
        ))}
        <button className="hide__show__button" onClick={() => { setHide(() => !hide); }}>{hide ? 'show done' : 'hide done'}</button>
      {!hide && toDoState.list.filter(e => e.done === true).map((todo, index) => (
        <Todo
          todoItem={todo}
          title={todo.title}
          description={todo.description}
          key={index}
        />
      ))}
    </ul>
    </div >
  );
};

export default Lists;

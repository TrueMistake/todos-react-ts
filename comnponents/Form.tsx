import React, {ChangeEvent, FC, useState} from 'react';
import {CreateTodo} from "../types/Todo";

const Form:FC<CreateTodo> = ({createTodo}) => {
  const [textTodo, setTextTodo] = useState<string>('');
  const inputText = (event:ChangeEvent<HTMLInputElement>):void => {
    setTextTodo(event.target.value)
  }

  const createPost = () => {
    const obj = {
      title: textTodo,
      check: false
    }

    createTodo(obj);
    setTextTodo('');
  }

  return (
    <form className="todo-create">
      <input
        type="text"
        className="todo-create__input"
        value={textTodo}
        onChange={inputText}/>
      <button
        type="button"
        className="todo-create__btn"
        onClick={createPost}
      >Создать</button>
    </form>
  );
};

export default Form;
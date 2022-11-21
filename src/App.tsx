import React, {FC, useState} from 'react';
import Form from "./comnponents/Form";
import {TodoObject} from "./types/Todo";
import TodoList from "./comnponents/TodoList";


const App:FC = () => {
    const [todos, setTodos] = useState<TodoObject[]>([]);

    const createTodo = (obj:TodoObject):void => {
        setTodos(() => [...todos, obj]);
    }

    const removeTodo = (idx:number):void => {
        setTodos(todos.filter((item, index) => index !== idx))
    }

    const checkedTodo = (idx:number) => {
        setTodos(todos.map((item, index) => {
            if (index === idx) {
                return {
                    ...item, check: !item.check
                }
            }
            return item;
        }))
    }

  return (
    <div className="App">
        <div className="wrapper">
          <h1>Todo List</h1>
          <div className="todo">
              <Form createTodo={createTodo}/>
              <TodoList todos={todos} checkedTodo={checkedTodo} removeTodo={removeTodo}/>
          </div>
        </div>
    </div>
  );
}

export default App;

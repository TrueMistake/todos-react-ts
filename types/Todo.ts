export interface TodoObject {
  title: string,
  check: boolean
}

export interface CreateTodo {
  createTodo: (todo:TodoObject) => void
}

export interface ListObject {
  todos: TodoObject[],
  checkedTodo: (idx:number) => void,
  removeTodo: (idx:number) => void
}

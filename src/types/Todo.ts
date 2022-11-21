export interface TodoObject {
  title: string,
  check: boolean
}

export interface CreateTodo {
  createTodo: (todo:TodoObject) => void
}

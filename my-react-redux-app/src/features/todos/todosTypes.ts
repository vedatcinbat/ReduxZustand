export interface TodosState {
    todos: Todo[],
    isTodosVisible: boolean,
    loading?: boolean,
    error?: string | null
}

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}
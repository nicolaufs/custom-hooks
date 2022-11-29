import { useEffect, useReducer } from "react"
import { todoReducer } from "./TodoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = (initTodos) => {

    const [todos, dispatch] = useReducer(todoReducer, initTodos, init)

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter((todo) => todo.pending).length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const onAddTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action)
    }

    const onToggleTodo = (todo) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: todo,
        }
        dispatch(action)
    }

    const onIncrementTodoPriority = (todo) => {
        const action = {
            type: '[TODO] Increment Todo Priority',
            payload: todo,
        }
        dispatch(action)
    }

    const onDecrementTodoPriority = (todo) => {
        const action = {
            type: '[TODO] Decrement Todo Priority',
            payload: todo,
        }
        dispatch(action)
    }

    const onRemoveTodo = (todo) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todo,
        }
        dispatch(action)
    }


    return {
        todos,
        onAddTodo,
        onToggleTodo,
        onIncrementTodoPriority,
        onDecrementTodoPriority,
        onRemoveTodo,
        todosCount,
        pendingTodosCount,
    }
}

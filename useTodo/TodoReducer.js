


export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...state, action.payload]

        case '[TODO] Toggle Todo': {
            return state.map(todo => {
                if (todo.id === action.payload.id)
                    return { ...todo, pending: !todo.pending }
                return todo
            })
        }

        case '[TODO] Remove Todo':
            return state.filter(todo => todo.id !== action.payload.id)

        case '[TODO] Increment Todo Priority': {
            return state.map(todo => {
                if (todo.id === action.payload.id)
                    return { ...todo, priority: todo.priority + 1 }
                return todo
            })
        }

        case '[TODO] Decrement Todo Priority': {
            return state.map(todo => {
                if (todo.id === action.payload.id && todo.priority > 0)
                    return { ...todo, priority: todo.priority - 1 }
                return todo
            })
        }
    }
}
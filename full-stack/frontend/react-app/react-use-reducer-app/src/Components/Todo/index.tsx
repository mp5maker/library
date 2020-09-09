import React from 'react'
import { TodoContext } from 'Contexts/Todo'
import get from 'lodash/get'

const ADD = 'add'
const DELETE = 'delete'
const EDIT = 'edit'

export interface TodoDataInterface {
    alias: string | number,
    description: string
}

export interface TodoStateInterface {
    data: TodoDataInterface[],
}

export interface TodoActionInterface {
    data: TodoDataInterface,
    type: 'add' | 'delete' | 'edit'
}

let todoList: Array<TodoDataInterface> = [
    { alias: 1, description: 'Go to Shopping Mall'},
    { alias: 2, description: 'Buy Some Medicines'},
]

const addTodoList = (data: TodoDataInterface) => {
    todoList = [data, ...todoList]
    return { data: todoList, type: ADD }
}

const editTodoList =  (data: TodoDataInterface) => {
    const dataAlias = get(data, 'alias', '')
    todoList = todoList.map((item) => {
        if (get(item, 'alias', '') === dataAlias) {
            return data
        } else return item
    })
    return { data: todoList, type: EDIT }
}

const deleteTodoList = (data: TodoDataInterface) => {
    todoList = todoList.filter((item) => get(item, 'alias', '') !== get(data, 'alias', ''))
    return { data: todoList, type: DELETE }
}

const reducer = (state: TodoStateInterface, action: TodoActionInterface): TodoStateInterface => {
    switch (action.type) {
        case ADD:
            return addTodoList(action.data)
        case EDIT:
            return editTodoList(action.data)
        case DELETE:
            return deleteTodoList(action.data)
        default:
            return state
    }
}

export const Todo: React.FC<{}> = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, { data: todoList })

    return (
        <>
            <TodoContext.Provider value={{
                add: (data) => dispatch({ type: ADD, data }),
                edit: (data) => dispatch({ type: EDIT, data }),
                remove: (data) => dispatch({ type: DELETE, data }),
                todo: get(state, 'data', [])
            }}>
                { children }
            </TodoContext.Provider>
        </>
    )
}
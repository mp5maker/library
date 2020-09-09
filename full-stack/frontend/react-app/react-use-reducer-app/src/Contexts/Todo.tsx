import React from 'react'

export interface TodoContextInterface {
    todo: any,
    add: ((params: any) => void) | ((params: any) => void),
    edit: ((params: any) => void) | ((params: any) => void),
    remove: ((params: any) => void) | ((params: any) => void),
}

export const TodoContext = React.createContext<Partial<TodoContextInterface>>({})
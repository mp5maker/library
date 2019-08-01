export const InitState: any = {
    type: '',
    employee: []
}

export const employeeReducer = (state = InitState, action: any) => {
    switch(action.type) {
        case 'ADD':
            return { ...state, ...action }
        case 'EDIT':
            return { ...state, ...action }
        case 'DELETE':
            return { ...state, ...action }
        default: return { ...state }
    }
}
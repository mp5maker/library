import * as React from 'react'

import { InitState, employeeReducer } from '../hooks/store'


export const CheckReducer = () => {
    const [state, dispatch] = React.useReducer(employeeReducer, InitState)

    const loadData = () => dispatch({
        type: 'ADD',
        employee: [
            {
                name: "Photon",
                age: 27
            },
            {
                name: "Erfan",
                age: 30
            },
            {
                name: "Sami",
                age: 29
            }
        ]
    })

    return (
        <React.Fragment>
            <div className="my-3">
                <button onClick={loadData} className="btn btn-success">
                    Load Data
                </button>
            </div>
            {
                state.employee.map((item: any, index: any) => (
                    <React.Fragment key={index}>
                        <div>
                            <span>
                                Name: { item.name }
                            </span>&nbsp;
                            <span>
                                Age: { item.age }
                            </span>
                        </div>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}
import * as React from 'react'
import MaterialUICheckbox from '@material-ui/core/Checkbox'

interface CheckboxPropsInterface {
    checked: boolean,
    onChange: ((params: any) => void) | ((params: any) => any)
}

export const Checkbox: React.FC<CheckboxPropsInterface> = ({ checked, onChange }) => {
    return (
        <MaterialUICheckbox
            checked={checked}
            onChange={onChange}
        />
    )
}
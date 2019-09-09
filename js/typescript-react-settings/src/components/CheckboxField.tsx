import * as React from 'react';

interface RawCheckboxPropsInterface {
    onChange: (params: any) => any,
    disabled: boolean,
    checked: boolean,
    id: string,
    children: any
}

interface RawCheckboxStateInterface {

}

export const LabelField = ({ children, ...props}: any) => {
    return (
        <label
            htmlFor={props.id}
            { ...props }>
            { children }
        </label>
    )
}

export const InputField = ({ ...props }: any) => {
    const { disabled, checked } = props

    return (
        <input
            type="checkbox"
            checked={true}
            disabled={true}
            onChange={props.handleChange}
            {...props} />
    )
}

export class RawCheckbox extends React.Component<RawCheckboxPropsInterface, RawCheckboxStateInterface> {
    constructor(props: RawCheckboxPropsInterface) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: any) {
        const { onChange } = this.props
        if (onChange) onChange(event)
    }

    render() {
        return this.props.children({
            LabelField: LabelField,
            InputField: InputField
        });
    }
}

export const BasicCheckbox: React.SFC<any> = ({ label, ...props}: any) => {
    return (
        <RawCheckbox {...props}>
            {
                ({ LabelField, InputField }: any) => (
                    <LabelField className="md-check" { ...props }>
                        <InputField { ...props } />
                        <i className="green"></i>
                        { label }
                    </LabelField>
                )
            }
        </RawCheckbox>
    )
}

export default BasicCheckbox
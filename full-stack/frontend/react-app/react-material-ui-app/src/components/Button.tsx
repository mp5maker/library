import * as React from 'react'
import MaterialUIButton from '@material-ui/core/Button'
import PropTypes from 'prop-types'

interface ButtonPropsInterface {
    color?: 'default' | 'inherit' | 'primary' | 'secondary',
    variant?: 'contained' | 'outlined' | 'text',
    disabled?: boolean,
    fullWidth?: boolean,
    className?: string,
}


export const Button: React.FC<ButtonPropsInterface> = ({
    color,
    variant,
    disabled,
    fullWidth,
    children,
    className
}) => {

    const props = {
        ...(className ? { className } : {})
    }

    return (
        <MaterialUIButton
            color={color}
            variant={variant}
            disabled={disabled}
            fullWidth={fullWidth}
            {...props}
        >
            {children}
        </MaterialUIButton>
    );
};

Button.defaultProps = {
    color: 'default',
    variant: 'text',
    disabled: false,
    fullWidth: false,
}


Button.propTypes = {
    color: PropTypes.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary'
    ]),
    variant: PropTypes.oneOf([
        'contained',
        'outlined',
        'text'
    ]),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    className: PropTypes.string
}
import * as React from 'react'
import PropTypes from 'prop-types'
import MaterialUITypography from '@material-ui/core/Typography'

interface TypographyPropsInterface {
    color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error',
    display?: 'initial' | 'block' | 'inline',
    variant?: 'h1'| 'h2'| 'h3'| 'h4'| 'h5'| 'h6'| 'subtitle1'| 'subtitle2'| 'body1'| 'body2'| 'caption'| 'button'| 'overline'| 'srOnly'| 'inherit',
    className?: string
}


export const Typography: React.FC<TypographyPropsInterface> = ({ children, color, display, variant, className }) => {

    const props = {
        ...(className ? { className } : {})
    }

    return (
        <MaterialUITypography
            variant={variant}
            display={display}
            color={color}
            {...props}>
            { children }
        </MaterialUITypography>
    )
}

Typography.defaultProps = {
    variant: 'body1',
    color: 'primary',
    display: 'inline'
}

Typography.propTypes = {
    color: PropTypes.oneOf([
        'initial',
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error'
    ]),
    display: PropTypes.oneOf([
        'initial',
        'block',
        'inline'
    ]),
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
        'srOnly',
        'inherit'
    ]),
    className: PropTypes.string
}
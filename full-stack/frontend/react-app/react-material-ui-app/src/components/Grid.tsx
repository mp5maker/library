import * as React from 'react'
import PropTypes from 'prop-types'
import MaterialUIGrid from '@material-ui/core/Grid'

interface GridPropsInterface {
    item?: boolean;
    container?: boolean;
    direction?: "row" | "row-reverse" | "column" | "column-reverse",
    xs?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    sm?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    md?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    lg?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    xl?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
}

export const Grid: React.FC<GridPropsInterface> = ({ direction, item, container, children, xs, sm, md, lg, xl }) => {
    const props = {
        ...(xs ? { xs } : {}),
        ...(sm ? { sm } : {}),
        ...(md ? { md } : {}),
        ...(lg ? { lg } : {}),
        ...(xl ? { xl } : {}),
        ...(container ? { container } : {}),
        ...(direction ? { direction } : {}),
        ...(item ? { item } : {}),
    }

    return (
        <MaterialUIGrid
            {...props}>
            { children }
        </MaterialUIGrid>
    )
}

Grid.defaultProps = {
    container: false,
    item: false
}

Grid.propTypes = {
    item: PropTypes.bool,
    container: PropTypes.bool,
    direction: PropTypes.oneOf([
        "row",
        "row-reverse",
        "column",
        "column-reverse",
    ]),
    xs: PropTypes.oneOf([
        false,
        "auto",
        true,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
    sm: PropTypes.oneOf([
        false,
        "auto",
        true,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
    md: PropTypes.oneOf([
        false,
        "auto",
        true,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
    lg: PropTypes.oneOf([
        false,
        "auto",
        true,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
    xl: PropTypes.oneOf([
        false,
        "auto",
        true,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
};
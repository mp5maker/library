import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography } from 'components/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import UserIcon from '@material-ui/icons/VerifiedUser'

const useStyles = makeStyles(() => ({
    typography: {
        flex: 1,
        color: `white`
    }
}))

export const Header = () => {
    const classes = useStyles()

    return (
        <AppBar position={`static`}>
            <Toolbar>
                <Typography
                    className={classes.typography}>
                    Material UI
                </Typography>
                <UserIcon />
            </Toolbar>
        </AppBar>
    );
}
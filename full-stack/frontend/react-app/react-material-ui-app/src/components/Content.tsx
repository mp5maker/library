import * as React from 'react'
import { CoffeeCard } from 'components/CoffeeCard'
import { Grid } from 'components/Grid'
import Box from '@material-ui/core/Box'

export const Content = () => {
    return (
        <Box
            padding={1}>
            <Grid spacing={4} container={true}>
                <Grid item={true} xs={12} sm={4}>
                    <CoffeeCard />
                </Grid>
                <Grid item={true} xs={12} sm={4}>
                    <CoffeeCard />
                </Grid>
                <Grid item={true} xs={12} sm={4}>
                    <CoffeeCard />
                </Grid>
            </Grid>
        </Box>
    );
}
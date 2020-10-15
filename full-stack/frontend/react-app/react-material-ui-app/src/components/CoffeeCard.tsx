import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { Typography } from 'components/Typography'
import { Button } from 'components/Button'
import Box from '@material-ui/core/Box'

export const CoffeeCard = () => {
    return (
        <Card>
            <CardHeader
                title={`Header`} />
            <CardContent>
                <Typography>
                    Content
                </Typography>
            </CardContent>
            <CardActions>
                <Box padding={0.5}>
                    <Button size="small">
                        Learn More
                    </Button>
                </Box>
            </CardActions>
        </Card>
    )
}
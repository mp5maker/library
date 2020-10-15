import React from "react";
import { Grid } from "components/Grid";
import { Header } from "components/Header"
import { Content } from "components/Content"

export const Figma = () => {
    return (
        <Grid container={true} direction={`column`}>
            <Grid item={true} direction={`row`} container={true}>
                <Header />
            </Grid>
            <Grid item={true} container={true}>
                <Grid item={true} xs={false} sm={2} />
                <Grid item={true} xs={12} sm={8}>
                    <Content />
                </Grid>
                <Grid item={true} xs={false} sm={2} />
            </Grid>
        </Grid>
    );
}

export default Figma
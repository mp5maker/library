import React from "react";
import { Grid } from "components/Grid";

export const Figma = () => {
    return (
        <Grid container={true} direction={`column`}>
            <Grid item={true} direction={`row`} container={true}>
                {" "}
                Header{" "}
            </Grid>
            <Grid item={true} container={true}>
                <Grid item={true} xs={false} sm={2} />
                <Grid item={true} xs={12} sm={10}>
                    Lorem ipsum dolor sit amet.
                </Grid>
                <Grid item={true} xs={false} sm={2} />
            </Grid>
        </Grid>
    );
}

export default Figma
import React from "react";
import { Button } from "components/Button";
import { Typography } from "components/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "App.scss";

const useStyles = makeStyles({
    typography: {
        fontStyle: `italic`,
        color: "firebrick",
    },
    buttonStyle: {
        color: "green",
        borderColor: "green",
    },
});

export const ShowCase = () => {
    const classes = useStyles();

    return (
        <div className="App">
            <div
                style={{
                    padding: 5,
                }}
            >
                <div
                    style={{
                        padding: 5,
                    }}
                >
                    <Typography
                        className={classes.typography}
                        variant={`h3`}
                        color={`secondary`}
                    >
                        Check out my typography
                    </Typography>
                </div>
                <Button
                    className={classes.buttonStyle}
                    fullWidth={true}
                    color={`primary`}
                    variant={`outlined`}
                    disabled={false}
                >
                    My First Button
                </Button>
            </div>
        </div>
    );
}

export default ShowCase;

import React from "react";
import { Button } from "components/Button";
import { Typography } from "components/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Checkbox } from "components/Checkbox";

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

export const ShowCase = (): JSX.Element => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState<boolean>(false);

    return (
        <Box className="App">
            <Box padding={5}>
                <Box padding={5}>
                    <Typography
                        className={classes.typography}
                        variant={`h3`}
                        color={`secondary`}
                    >
                        Check out my typography
                    </Typography>
                </Box>
                <Box padding={5}>
                    <Button
                        className={classes.buttonStyle}
                        fullWidth={true}
                        color={`primary`}
                        variant={`outlined`}
                        disabled={false}
                    >
                        My First Button
                    </Button>
                </Box>
            </Box>
            <Box padding={5}>
                <Box display={`inline-block`} marginLeft={2}>
                    <Button
                        startIcon={<SaveIcon />}
                        color={`primary`}
                        variant={`contained`}
                        disabled={false}
                    >
                        Save
                    </Button>
                </Box>
                <Box display={`inline-block`} marginLeft={2}>
                    <Button
                        startIcon={<DeleteIcon />}
                        color={`secondary`}
                        variant={`contained`}
                        disabled={false}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
            <Box padding={5}>
                <ButtonGroup
                    color={`secondary`}
                    variant={`contained`}
                    disabled={false}
                >
                    <Button startIcon={<SaveIcon />}>Save</Button>
                    <Button startIcon={<DeleteIcon />} color={`secondary`}>
                        Delete
                    </Button>
                </ButtonGroup>
            </Box>
            <Box padding={5} display={`flex`} justifyContent={`space-between`}>
                <Box>Checkbox Check</Box>
                <Box>
                    <Checkbox
                        checked={checked}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setChecked(event.currentTarget.checked)}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ShowCase;

import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function EditButton({ EditButtonFunc, id }) {
    const classes = useStyles();

    return (
        <div className="editButtonTask">
            <Button
                variant="contained"
                color="grey"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => {
                    EditButtonFunc(id);
                }}
            >
                Edit
            </Button>
        </div>
    );
}

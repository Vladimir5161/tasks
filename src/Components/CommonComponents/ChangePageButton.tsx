import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

interface ChangePageButtonTypes {
    buttonName: string;
    changePage: () => void;
    setCreateOrLog: (value: boolean) => void;
}

const ChangePageButton: React.FC<ChangePageButtonTypes> = ({
    buttonName,
    changePage,
    setCreateOrLog,
}) => {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Button
                    style={{
                        border: "1px solid blue",
                        display: "block",
                        margin: "10px 0 10px auto",
                        textTransform: "none",
                    }}
                    size="medium"
                    className={classes.margin}
                    onMouseDown={() => {
                        changePage();
                        buttonName === "Log in"
                            ? setCreateOrLog(true)
                            : setCreateOrLog(false);
                    }}
                >
                    {buttonName}
                </Button>
            </div>
        </div>
    );
};

export default ChangePageButton;

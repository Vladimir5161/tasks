import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { createField, InputForm, InputFormPass } from "./Field";
import { reduxForm } from "redux-form";
import ChangePageButton from "../CommonComponents/ChangePageButton";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

function Login({ changePage, ...props }) {
    const classes = useStyles();

    return (
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={props.handleSubmit}
        >
            {createField("email", "email", [], InputForm, {
                inputLabel: "your login",
            })}
            {createField("password", "password", [], InputFormPass, {
                inputLabel: "your password",
            })}
            <ChangePageButton
                buttonName="Create Account"
                changePage={changePage}
            />
            <Button
                type="submit"
                style={{ margin: "0 auto" }}
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<CloudUploadIcon />}
            >
                Send
            </Button>
        </form>
    );
}
const LoginForm = reduxForm({ form: "loginForm" })(Login);

export default LoginForm;

export const validate = (values) => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required';
    } else if (values.email.length < 5) {
        errors.email = 'Must be 5 characters or more';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 5) {
        errors.password = 'Must be 5 characters or more';
    }

    if (values.password.split("").some(
        (item) => item === "1" ||
            item === "3" ||
            item === "4" ||
            item === "5" ||
            item === "6" ||
            item === "7" ||
            item === "8" ||
            item === "9" ||
            item === "0" ||
            item === "2")) {
        return undefined
    } else {
        errors.password = "password should includes at least one number";
    }

    if (!values.addTask) {
        errors.addTask = 'Required';
    } else if (values.addTask.length < 5) {
        errors.addTask = 'Must be 5 characters or more';
    } else if (values.addTask.length > 300) {
        errors.addTask = 'Too long';
    }

    if (!values.text) {
        errors.text = 'Required';
    } else if (values.text.length < 5) {
        errors.text = 'Must be 5 characters or more';
    } else if (values.text.length > 300) {
        errors.text = 'Too long';
    }
    return errors;
};



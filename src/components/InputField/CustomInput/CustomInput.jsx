import { TextField } from "@material-ui/core";
import React from "react";

const CustomInput = () => {
    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
        </form>
    );
};

export default CustomInput;

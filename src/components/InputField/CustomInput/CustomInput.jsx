import { TextField } from "@material-ui/core";
import React from "react";

const CustomInput = ({ placeHolder, inputType, ...otherProps }) => {
    return (
        <TextField
            className="w-100"
            type={inputType}
            label={placeHolder}
            variant="filled"
            {...otherProps}
        />
    );
};

export default CustomInput;

import { TextField } from "@material-ui/core";
import React from "react";

const CustomDatePicker = ({ placeHolder, ...otherProps }) => {
    return (
        <TextField
            className="w-100"
            id="date"
            label={placeHolder}
            type="date"
            variant="filled"
            InputLabelProps={{
                shrink: true,
            }}
            {...otherProps}
        />
    );
};

export default CustomDatePicker;

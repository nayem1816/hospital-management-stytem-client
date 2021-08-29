import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: "none",
    },
}));

const UploadField = () => {
    const classes = useStyles();
    return (
        <div className="">
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button
                    variant="contained"
                    color="default"
                    component="span"
                    size="large"
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
            </label>
        </div>
    );
};

export default UploadField;

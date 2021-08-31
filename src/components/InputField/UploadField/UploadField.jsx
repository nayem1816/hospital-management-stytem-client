import React from "react";
import { useState } from "react";
import "./UploadField.css";

const UploadField = ({ placeHolder }) => {
    const [fileText, setFileText] = useState("No file chosen...");

    const fileSelect = () => {
        const fileInput = document.getElementById("file-upload-input");
        fileInput.click();
    };
    const fileNameChange = () => {
        const fileInput = document.getElementById("file-upload-input");
        console.log(fileInput.files);
        const filename = fileInput.files[0].name;
        setFileText(filename);
    };

    return (
        <div className="file-upload">
            <div onClick={fileSelect} className="file-upload-select">
                <div className="file-select-button">{placeHolder}</div>
                <div className="file-select-name">{fileText}</div>
                <input
                    onChange={fileNameChange}
                    type="file"
                    name="file-upload-input"
                    id="file-upload-input"
                />
            </div>
        </div>
    );
};

export default UploadField;

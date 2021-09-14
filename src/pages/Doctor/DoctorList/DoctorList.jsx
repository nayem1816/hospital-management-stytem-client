import React from "react";
import { useState, useEffect } from "react";

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/doctorList")
            .then((res) => res.json())
            .then((data) => {
                setDoctors(data);
            });
    }, []);
    console.log(doctors);
    return (
        <div>
            <h2>Doctor List</h2>
            <h4>
                <strong>Total Doctor:</strong> {doctors.length}
            </h4>
        </div>
    );
};

export default DoctorList;

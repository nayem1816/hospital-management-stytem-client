import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomPassInput from "../../../components/InputField/CustomPassInput/CustomPassInput";
import CustomInput from "./../../../components/InputField/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/InputField/CustomButton/CustomButton";
import CustomSelect from "../../../components/InputField/CustomSelect/CustomSelect";
import UploadField from "../../../components/InputField/UploadField/UploadField";
import CustomTextArea from "../../../components/InputField/CustomTextArea/CustomTextArea";
import CustomDatePicker from "../../../components/InputField/CustomDatePicker/CustomDatePicker";
import CustomRadioBtn from "../../../components/InputField/CustomRadioBtn/CustomRadioBtn";

const AddDoctor = () => {
    const { register, handleSubmit } = useForm();
    const [doctorImage, setDoctorImage] = useState(null);
    const onSubmit = (data) => {
        const doctorsData = data;
        const doctorFullData = { ...doctorsData, doctorImg: doctorImage };

        fetch("http://localhost:5000/addDoctor", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(doctorFullData),
        })
            .then((res) => res.json)
            .then((data) => {
                alert("Packages Add Successfully");
            });
    };
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h4>Add Doctor</h4>
                <h4>
                    <Link to="/doctor/doctorList">Doctor List</Link>
                </h4>
            </div>
            <div className="mt-3">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 p-3 first-name">
                            <CustomInput
                                placeHolder={"First Name"}
                                inputType={"text"}
                                {...register("firstName", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 last-name">
                            <CustomInput
                                placeHolder={"Last Name"}
                                inputType={"text"}
                                {...register("lastName", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 email">
                            <CustomInput
                                placeHolder={"Email"}
                                inputType={"email"}
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 password">
                            <CustomPassInput register={register} />
                        </div>
                        <div className="col-md-6 p-3 designation">
                            <CustomInput
                                placeHolder={"Designation"}
                                inputType={"text"}
                                {...register("designation", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 department">
                            <CustomSelect
                                placeHolder="Department"
                                selectOptions={[
                                    "Neurology",
                                    "Gynecology",
                                    "Microbiology",
                                    "Pharmacy",
                                    "Neonatal",
                                ]}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3 address">
                            <CustomInput
                                placeHolder={"Address"}
                                inputType={"text"}
                                {...register("address", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 specialist">
                            <CustomInput
                                placeHolder={"Specialist"}
                                inputType={"text"}
                                {...register("specialist", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 mobile">
                            <CustomInput
                                placeHolder={"Mobile"}
                                inputType={"number"}
                                {...register("mobile", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 picture-upload">
                            <UploadField
                                placeHolder={"Doctor Image"}
                                setDoctorImage={setDoctorImage}
                            />
                        </div>
                        <div className="col-md-12 p-3 short-biography">
                            <CustomTextArea
                                placeHolder={"Short Biography"}
                                {...register("shortBiography", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3 doctor-birthday">
                            <CustomDatePicker
                                placeHolder={"Date Of Birth"}
                                {...register("birthday", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 bloodGroup">
                            <CustomSelect
                                placeHolder="Blood Group"
                                selectOptions={[
                                    "A+",
                                    "A-",
                                    "B+",
                                    "B-",
                                    "AB+",
                                    "AB-",
                                    "O+",
                                    "O-",
                                ]}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3 doctor-sex">
                            <CustomRadioBtn
                                titleName={"Sex"}
                                regName={"sex"}
                                defaultValue={false}
                                selectOptions={["Male", "Female", "Other"]}
                                rules={{ required: true }}
                                register={register}
                            />
                        </div>

                        <div className="col-md-12 p-3 button">
                            <CustomButton
                                btnType={"btn"}
                                btnTxt={"Reset"}
                                color="secondary"
                            />
                            <CustomButton
                                btnType={"submit"}
                                btnTxt={"Submit"}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;

import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "./../../../components/InputField/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/InputField/CustomButton/CustomButton";
import CustomSelect from "../../../components/InputField/CustomSelect/CustomSelect";
import UploadField from "../../../components/InputField/UploadField/UploadField";

const AddPatient = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h4>Add Patient</h4>
                <h4>
                    <Link to="/patient/patientList">Patient List</Link>
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
                                placeHolder={"Create ID"}
                                inputType={"number"}
                                {...register("createId", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 mobile">
                            <CustomInput
                                placeHolder={"Mobile"}
                                inputType={"number"}
                                {...register("mobile", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 email">
                            <CustomInput
                                placeHolder={"Email"}
                                inputType={"email"}
                                {...register("email", { required: true })}
                            />
                        </div>

                        <div className="col-md-6 p-3 department">
                            <CustomSelect
                                placeHolder="Blood Group"
                                selectOptions={[
                                    "A+",
                                    "A-",
                                    "B+",
                                    "B-",
                                    "O+",
                                    "O-",
                                    "AB+",
                                    "AB-",
                                ]}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3 designation">
                            <CustomInput
                                placeHolder={"Occupation"}
                                inputType={"text"}
                                {...register("occupation", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 department">
                            <CustomSelect
                                placeHolder="Marital Status"
                                selectOptions={["Married", "Unmarried"]}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3 address">
                            <CustomInput
                                placeHolder={"Date Of Birth"}
                                inputType={"text"}
                                {...register("dateOfBirth", { required: true })}
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
                                placeHolder={"Patient History"}
                                inputType={"text"}
                                {...register("patientHistory", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3 department">
                            <CustomSelect
                                placeHolder="Sex"
                                selectOptions={["Male", "Female", "Others"]}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3 mobile">
                            <UploadField placeHolder={"Patient Image"} />
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

export default AddPatient;

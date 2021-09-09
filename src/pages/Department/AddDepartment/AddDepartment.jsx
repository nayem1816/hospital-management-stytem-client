import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "./../../../components/InputField/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/InputField/CustomButton/CustomButton";
import CustomRadioBtn from "../../../components/InputField/CustomRadioBtn/CustomRadioBtn";

const AddDepartment = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h4>Add Department</h4>
                <h4>
                    <Link to="/department/addDepartment">Department List</Link>
                </h4>
            </div>
            <div className="mt-3">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 p-3 first-name">
                            <CustomInput
                                placeHolder={"Doctor Name"}
                                inputType={"text"}
                                {...register("doctorName", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 last-name">
                            <CustomInput
                                placeHolder={"Department Name"}
                                inputType={"text"}
                                {...register("departmentName", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3 last-name">
                            <CustomInput
                                placeHolder={"Department Head"}
                                inputType={"text"}
                                {...register("departmentHead", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-12 p-3 doctor-status">
                            <CustomRadioBtn
                                titleName={"Status"}
                                regName={"doctor-status"}
                                defaultValue={false}
                                selectOptions={["Active", "Inactive"]}
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

export default AddDepartment;

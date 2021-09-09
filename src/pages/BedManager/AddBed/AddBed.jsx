import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "./../../../components/InputField/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/InputField/CustomButton/CustomButton";
import CustomTextArea from "../../../components/InputField/CustomTextArea/CustomTextArea";
import CustomRadioBtn from "../../../components/InputField/CustomRadioBtn/CustomRadioBtn";

const AddBed = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h4>Add Bed</h4>
                <h4>
                    <Link to="/bedManager/addBed">Bed List</Link>
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
                                placeHolder={"Room No"}
                                inputType={"number"}
                                {...register("roomNo", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 mobile">
                            <CustomInput
                                placeHolder={"Bed Type"}
                                inputType={"text"}
                                {...register("bedType", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 mobile">
                            <CustomInput
                                placeHolder={"Admit Date"}
                                inputType={"text"}
                                {...register("admitDate", { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3 bed-capacity">
                            <CustomInput
                                placeHolder={"Bed Capacity"}
                                inputType={"number"}
                                {...register("bedCapacity", { required: true })}
                            />
                        </div>
                        <div className="col-md-12 p-3 description">
                            <CustomTextArea
                                placeHolder={"Add Description"}
                                {...register("description", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3 bed-sex">
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

export default AddBed;

import React from "react";
import { Link } from "react-router-dom";
import CustomPassInput from "../../../components/InputField/CustomPassInput/CustomPassInput";
import CustomInput from "./../../../components/InputField/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/InputField/CustomButton/CustomButton";
import UploadField from "../../../components/InputField/UploadField/UploadField";
import CustomTextArea from "../../../components/InputField/CustomTextArea/CustomTextArea";
import CustomRadioBtn from "../../../components/InputField/CustomRadioBtn/CustomRadioBtn";

const AddRepresentative = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h4>Add Representative</h4>
        <h4>
          <Link to="/humanResource/addRepresentative">Representative List</Link>
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
            <div className="col-md-6 p-3 mobile">
              <CustomInput
                placeHolder={"Mobile"}
                inputType={"number"}
                {...register("mobile", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 representative-image">
              <UploadField placeHolder={"Representative Image"} />
            </div>
            <div className="col-md-12 p-3 representative-address">
              <CustomTextArea
                placeHolder={"Address"}
                {...register("address", {
                  required: true,
                })}
              />
            </div>
            <div className="col-md-6 p-3 representative-sex">
              <CustomRadioBtn
                titleName={"Sex"}
                regName={"sex"}
                defaultValue={false}
                selectOptions={["Male", "Female", "Other"]}
                rules={{ required: true }}
                register={register}
              />
            </div>
            <div className="col-md-6 p-3 representative-status">
              <CustomRadioBtn
                titleName={"Status"}
                regName={"status"}
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
              <CustomButton btnType={"submit"} btnTxt={"Submit"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRepresentative;

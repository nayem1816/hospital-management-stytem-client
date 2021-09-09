import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "./../../../components/InputField/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/InputField/CustomButton/CustomButton";
import CustomTextArea from "../../../components/InputField/CustomTextArea/CustomTextArea";
import CustomDatePicker from "../../../components/InputField/CustomDatePicker/CustomDatePicker";
import CustomRadioBtn from "../../../components/InputField/CustomRadioBtn/CustomRadioBtn";

const AddNotice = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h4>Add Notice</h4>
        <h4>
          <Link to="/doctor/doctorList">Notice List</Link>
        </h4>
      </div>
      <div className="mt-3">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 p-3 notice-title">
              <CustomInput
                placeHolder={"Title"}
                inputType={"text"}
                {...register("title", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 noticed-by">
              <CustomInput
                placeHolder={"Noticed By"}
                inputType={"text"}
                {...register("noticedBy", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 start-date">
              <CustomDatePicker
                placeHolder={"Start Date"}
                {...register("startDate", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 end-date">
              <CustomDatePicker
                placeHolder={"End Date"}
                {...register("endDate", { required: true })}
              />
            </div>
            <div className="col-md-12 p-3 notice-description">
              <CustomTextArea
                placeHolder={"Description"}
                {...register("description", {
                  required: true,
                })}
              />
            </div>
            <div className="col-md-6 p-3 notice-status">
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

export default AddNotice;

import React from "react";
import { Link } from "react-router-dom";
import CustomPassInput from "../../../components/InputField/CustomPassInput/CustomPassInput";
import CustomInput from "./../../../components/InputField/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/InputField/CustomButton/CustomButton";
import CustomTextArea from "../../../components/InputField/CustomTextArea/CustomTextArea";
import CustomRadioBtn from "../../../components/InputField/CustomRadioBtn/CustomRadioBtn";

const AddAppointment = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h4>Add Appointment</h4>
        <h4>
          <Link to="/appointment/addAppointment">Appointment List</Link>
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
            <div className="col-md-6 p-3 email">
              <CustomInput
                placeHolder={"Patient ID"}
                inputType={"number"}
                {...register("createId", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 last-name">
              <CustomInput
                placeHolder={"Department Name"}
                inputType={"text"}
                {...register("departmentName", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 last-name">
              <CustomInput
                placeHolder={"Appointment with"}
                inputType={"text"}
                {...register("appointmentWith", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 last-name">
              <CustomInput
                placeHolder={"Appointment Date"}
                inputType={"text"}
                {...register("appointmentDate", { required: true })}
              />
            </div>
            <div className="col-md-12 p-3 problem">
              <CustomTextArea
                placeHolder={"Problem"}
                {...register("problem", {
                  required: true,
                })}
              />
            </div>
            <div className="col-md-6 p-3 sex">
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
              <CustomButton btnType={"submit"} btnTxt={"Submit"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointment;
